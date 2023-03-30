export type Category = {
  name: String
}

export type Joke = {
  body: String
  category: Category
}

export type InitialState = {
  categories: Category[]
  joke: Joke[]
  loading: Boolean
  error: String | null
}

export type Action = {
  type: String
  payload?: any
}