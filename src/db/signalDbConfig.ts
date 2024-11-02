import { PersistentCollection } from 'signaldb'

const usersCollection = new PersistentCollection('users')

// Function to handle user signup
export const signupUser = async (
  email: string,
  password: string
): Promise<{ success: boolean }> => {
  const existingUser = usersCollection.findOne({ email })
  if (existingUser) throw new Error('User already exists')

  // Insert new user
  usersCollection.insert({ email, password })
  return { success: true }
}

// Function to handle user login
export const loginUser = async (email: string, password: string): Promise<{ success: boolean }> => {
  const user = usersCollection.findOne({ email, password })
  if (!user) throw new Error('Invalid email or password')

  return { success: true }
}
