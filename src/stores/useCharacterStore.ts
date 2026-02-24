import { EmptyCharacter, type Character } from '@/models/characterModel'
import { addCharacter, deleteCharacter, getCharacters, updateCharacter } from '@/services/charactersData'
import { defineStore } from 'pinia'

//* Single source of True
export const useCharacterStore = defineStore('character', {
  state: () => ({
    initialized: false,
    characters: new Map<number, Character>(),
  }),

  getters: {
    formattedCharacters(state): Character[] {
      return Array.from(state.characters.values())
    },
  },
  actions: {
    async init() {
      if (!this.initialized) {
        await this.fetchCaracters()
      }
    },
    async fetchCaracters() {
      try {
        const response = await getCharacters()
        const result = response.data
        const newMap = new Map<number, Character>()
        result.forEach((character) => {
          newMap.set(character.id, character)
        })
        this.characters = newMap
        this.initialized = true
      } catch (error) {
        console.error('Errol fetching Characters: ', error)
        const defaultCharacter: Character = EmptyCharacter
        this.characters = new Map<number, Character>([[defaultCharacter.id, defaultCharacter]])
      }
    },

    getCharacter(id: number): Character | undefined {
      return this.characters.get(id)
    },

    async addCharacter(character: Omit<Character, "id">) {
      try {
        const response = await addCharacter(character)
        const newCharacter = response.data
        this.characters.set(newCharacter.id, newCharacter)
      } catch (error) {
        console.error('Error adding a new Character: ', error)
      }
    },
    async editCharacter(character: Character) {
      try {
        const response = await updateCharacter(character)
        const editedCharacter = response.data
        this.characters.set(editedCharacter.id, editedCharacter)
      } catch (error) {
        console.error('Error updating the Character: ', error)
      }
    },
    async deleteCharacter(id: number) {
      try {
        await deleteCharacter(id)
        this.characters.delete(id)
      } catch (error) {
        console.error('Error deleting a Character: ', error)
      }
    },
  },
})
