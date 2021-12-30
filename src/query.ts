
export const GQL_QUERY = `
  type Query {
    hello: String
    getToken : String
    validToken(token: String) : String
  }
`;