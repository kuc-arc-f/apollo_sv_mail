
export const GQL_MUTATION = `
type Mutation {
  sendMail(token: String, to_mail: String, title: String, body:  String ): String
}
`;
