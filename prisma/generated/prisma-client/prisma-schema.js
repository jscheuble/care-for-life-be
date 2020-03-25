module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAnswers {
  count: Int!
}

type AggregateEmployee {
  count: Int!
}

type AggregateFamily {
  count: Int!
}

type AggregatePeople {
  count: Int!
}

type AggregateQuestion {
  count: Int!
}

type AggregateSurvey {
  count: Int!
}

type Answers {
  response_id: ID!
  dateTaken: DateTime!
  answer: String!
  question: Question!
  family: Family!
  respondent: People!
}

type AnswersConnection {
  pageInfo: PageInfo!
  edges: [AnswersEdge]!
  aggregate: AggregateAnswers!
}

input AnswersCreateInput {
  response_id: ID
  answer: String!
  question: QuestionCreateOneInput!
  family: FamilyCreateOneInput!
  respondent: PeopleCreateOneInput!
}

type AnswersEdge {
  node: Answers!
  cursor: String!
}

enum AnswersOrderByInput {
  response_id_ASC
  response_id_DESC
  dateTaken_ASC
  dateTaken_DESC
  answer_ASC
  answer_DESC
}

type AnswersPreviousValues {
  response_id: ID!
  dateTaken: DateTime!
  answer: String!
}

type AnswersSubscriptionPayload {
  mutation: MutationType!
  node: Answers
  updatedFields: [String!]
  previousValues: AnswersPreviousValues
}

input AnswersSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnswersWhereInput
  AND: [AnswersSubscriptionWhereInput!]
  OR: [AnswersSubscriptionWhereInput!]
  NOT: [AnswersSubscriptionWhereInput!]
}

input AnswersUpdateInput {
  answer: String
  question: QuestionUpdateOneRequiredInput
  family: FamilyUpdateOneRequiredInput
  respondent: PeopleUpdateOneRequiredInput
}

input AnswersUpdateManyMutationInput {
  answer: String
}

input AnswersWhereInput {
  response_id: ID
  response_id_not: ID
  response_id_in: [ID!]
  response_id_not_in: [ID!]
  response_id_lt: ID
  response_id_lte: ID
  response_id_gt: ID
  response_id_gte: ID
  response_id_contains: ID
  response_id_not_contains: ID
  response_id_starts_with: ID
  response_id_not_starts_with: ID
  response_id_ends_with: ID
  response_id_not_ends_with: ID
  dateTaken: DateTime
  dateTaken_not: DateTime
  dateTaken_in: [DateTime!]
  dateTaken_not_in: [DateTime!]
  dateTaken_lt: DateTime
  dateTaken_lte: DateTime
  dateTaken_gt: DateTime
  dateTaken_gte: DateTime
  answer: String
  answer_not: String
  answer_in: [String!]
  answer_not_in: [String!]
  answer_lt: String
  answer_lte: String
  answer_gt: String
  answer_gte: String
  answer_contains: String
  answer_not_contains: String
  answer_starts_with: String
  answer_not_starts_with: String
  answer_ends_with: String
  answer_not_ends_with: String
  question: QuestionWhereInput
  family: FamilyWhereInput
  respondent: PeopleWhereInput
  AND: [AnswersWhereInput!]
  OR: [AnswersWhereInput!]
  NOT: [AnswersWhereInput!]
}

input AnswersWhereUniqueInput {
  response_id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Employee {
  employee_id: ID!
  name: String!
  type: String!
}

type EmployeeConnection {
  pageInfo: PageInfo!
  edges: [EmployeeEdge]!
  aggregate: AggregateEmployee!
}

input EmployeeCreateInput {
  employee_id: ID
  name: String!
  type: String!
}

input EmployeeCreateOneInput {
  create: EmployeeCreateInput
  connect: EmployeeWhereUniqueInput
}

type EmployeeEdge {
  node: Employee!
  cursor: String!
}

enum EmployeeOrderByInput {
  employee_id_ASC
  employee_id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
}

type EmployeePreviousValues {
  employee_id: ID!
  name: String!
  type: String!
}

type EmployeeSubscriptionPayload {
  mutation: MutationType!
  node: Employee
  updatedFields: [String!]
  previousValues: EmployeePreviousValues
}

input EmployeeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmployeeWhereInput
  AND: [EmployeeSubscriptionWhereInput!]
  OR: [EmployeeSubscriptionWhereInput!]
  NOT: [EmployeeSubscriptionWhereInput!]
}

input EmployeeUpdateDataInput {
  name: String
  type: String
}

input EmployeeUpdateInput {
  name: String
  type: String
}

input EmployeeUpdateManyMutationInput {
  name: String
  type: String
}

input EmployeeUpdateOneRequiredInput {
  create: EmployeeCreateInput
  update: EmployeeUpdateDataInput
  upsert: EmployeeUpsertNestedInput
  connect: EmployeeWhereUniqueInput
}

input EmployeeUpsertNestedInput {
  update: EmployeeUpdateDataInput!
  create: EmployeeCreateInput!
}

input EmployeeWhereInput {
  employee_id: ID
  employee_id_not: ID
  employee_id_in: [ID!]
  employee_id_not_in: [ID!]
  employee_id_lt: ID
  employee_id_lte: ID
  employee_id_gt: ID
  employee_id_gte: ID
  employee_id_contains: ID
  employee_id_not_contains: ID
  employee_id_starts_with: ID
  employee_id_not_starts_with: ID
  employee_id_ends_with: ID
  employee_id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  AND: [EmployeeWhereInput!]
  OR: [EmployeeWhereInput!]
  NOT: [EmployeeWhereInput!]
}

input EmployeeWhereUniqueInput {
  employee_id: ID
}

type Family {
  family_id: ID!
  family_name: String!
}

type FamilyConnection {
  pageInfo: PageInfo!
  edges: [FamilyEdge]!
  aggregate: AggregateFamily!
}

input FamilyCreateInput {
  family_id: ID
  family_name: String!
}

input FamilyCreateOneInput {
  create: FamilyCreateInput
  connect: FamilyWhereUniqueInput
}

type FamilyEdge {
  node: Family!
  cursor: String!
}

enum FamilyOrderByInput {
  family_id_ASC
  family_id_DESC
  family_name_ASC
  family_name_DESC
}

type FamilyPreviousValues {
  family_id: ID!
  family_name: String!
}

type FamilySubscriptionPayload {
  mutation: MutationType!
  node: Family
  updatedFields: [String!]
  previousValues: FamilyPreviousValues
}

input FamilySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FamilyWhereInput
  AND: [FamilySubscriptionWhereInput!]
  OR: [FamilySubscriptionWhereInput!]
  NOT: [FamilySubscriptionWhereInput!]
}

input FamilyUpdateDataInput {
  family_name: String
}

input FamilyUpdateInput {
  family_name: String
}

input FamilyUpdateManyMutationInput {
  family_name: String
}

input FamilyUpdateOneRequiredInput {
  create: FamilyCreateInput
  update: FamilyUpdateDataInput
  upsert: FamilyUpsertNestedInput
  connect: FamilyWhereUniqueInput
}

input FamilyUpsertNestedInput {
  update: FamilyUpdateDataInput!
  create: FamilyCreateInput!
}

input FamilyWhereInput {
  family_id: ID
  family_id_not: ID
  family_id_in: [ID!]
  family_id_not_in: [ID!]
  family_id_lt: ID
  family_id_lte: ID
  family_id_gt: ID
  family_id_gte: ID
  family_id_contains: ID
  family_id_not_contains: ID
  family_id_starts_with: ID
  family_id_not_starts_with: ID
  family_id_ends_with: ID
  family_id_not_ends_with: ID
  family_name: String
  family_name_not: String
  family_name_in: [String!]
  family_name_not_in: [String!]
  family_name_lt: String
  family_name_lte: String
  family_name_gt: String
  family_name_gte: String
  family_name_contains: String
  family_name_not_contains: String
  family_name_starts_with: String
  family_name_not_starts_with: String
  family_name_ends_with: String
  family_name_not_ends_with: String
  AND: [FamilyWhereInput!]
  OR: [FamilyWhereInput!]
  NOT: [FamilyWhereInput!]
}

input FamilyWhereUniqueInput {
  family_id: ID
}

scalar Long

type Mutation {
  createAnswers(data: AnswersCreateInput!): Answers!
  updateAnswers(data: AnswersUpdateInput!, where: AnswersWhereUniqueInput!): Answers
  updateManyAnswerses(data: AnswersUpdateManyMutationInput!, where: AnswersWhereInput): BatchPayload!
  upsertAnswers(where: AnswersWhereUniqueInput!, create: AnswersCreateInput!, update: AnswersUpdateInput!): Answers!
  deleteAnswers(where: AnswersWhereUniqueInput!): Answers
  deleteManyAnswerses(where: AnswersWhereInput): BatchPayload!
  createEmployee(data: EmployeeCreateInput!): Employee!
  updateEmployee(data: EmployeeUpdateInput!, where: EmployeeWhereUniqueInput!): Employee
  updateManyEmployees(data: EmployeeUpdateManyMutationInput!, where: EmployeeWhereInput): BatchPayload!
  upsertEmployee(where: EmployeeWhereUniqueInput!, create: EmployeeCreateInput!, update: EmployeeUpdateInput!): Employee!
  deleteEmployee(where: EmployeeWhereUniqueInput!): Employee
  deleteManyEmployees(where: EmployeeWhereInput): BatchPayload!
  createFamily(data: FamilyCreateInput!): Family!
  updateFamily(data: FamilyUpdateInput!, where: FamilyWhereUniqueInput!): Family
  updateManyFamilies(data: FamilyUpdateManyMutationInput!, where: FamilyWhereInput): BatchPayload!
  upsertFamily(where: FamilyWhereUniqueInput!, create: FamilyCreateInput!, update: FamilyUpdateInput!): Family!
  deleteFamily(where: FamilyWhereUniqueInput!): Family
  deleteManyFamilies(where: FamilyWhereInput): BatchPayload!
  createPeople(data: PeopleCreateInput!): People!
  updatePeople(data: PeopleUpdateInput!, where: PeopleWhereUniqueInput!): People
  updateManyPeoples(data: PeopleUpdateManyMutationInput!, where: PeopleWhereInput): BatchPayload!
  upsertPeople(where: PeopleWhereUniqueInput!, create: PeopleCreateInput!, update: PeopleUpdateInput!): People!
  deletePeople(where: PeopleWhereUniqueInput!): People
  deleteManyPeoples(where: PeopleWhereInput): BatchPayload!
  createQuestion(data: QuestionCreateInput!): Question!
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateManyQuestions(data: QuestionUpdateManyMutationInput!, where: QuestionWhereInput): BatchPayload!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteManyQuestions(where: QuestionWhereInput): BatchPayload!
  createSurvey(data: SurveyCreateInput!): Survey!
  updateSurvey(data: SurveyUpdateInput!, where: SurveyWhereUniqueInput!): Survey
  updateManySurveys(data: SurveyUpdateManyMutationInput!, where: SurveyWhereInput): BatchPayload!
  upsertSurvey(where: SurveyWhereUniqueInput!, create: SurveyCreateInput!, update: SurveyUpdateInput!): Survey!
  deleteSurvey(where: SurveyWhereUniqueInput!): Survey
  deleteManySurveys(where: SurveyWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type People {
  person_id: ID!
  person_name: String!
  family: Family!
}

type PeopleConnection {
  pageInfo: PageInfo!
  edges: [PeopleEdge]!
  aggregate: AggregatePeople!
}

input PeopleCreateInput {
  person_id: ID
  person_name: String!
  family: FamilyCreateOneInput!
}

input PeopleCreateOneInput {
  create: PeopleCreateInput
  connect: PeopleWhereUniqueInput
}

type PeopleEdge {
  node: People!
  cursor: String!
}

enum PeopleOrderByInput {
  person_id_ASC
  person_id_DESC
  person_name_ASC
  person_name_DESC
}

type PeoplePreviousValues {
  person_id: ID!
  person_name: String!
}

type PeopleSubscriptionPayload {
  mutation: MutationType!
  node: People
  updatedFields: [String!]
  previousValues: PeoplePreviousValues
}

input PeopleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PeopleWhereInput
  AND: [PeopleSubscriptionWhereInput!]
  OR: [PeopleSubscriptionWhereInput!]
  NOT: [PeopleSubscriptionWhereInput!]
}

input PeopleUpdateDataInput {
  person_name: String
  family: FamilyUpdateOneRequiredInput
}

input PeopleUpdateInput {
  person_name: String
  family: FamilyUpdateOneRequiredInput
}

input PeopleUpdateManyMutationInput {
  person_name: String
}

input PeopleUpdateOneRequiredInput {
  create: PeopleCreateInput
  update: PeopleUpdateDataInput
  upsert: PeopleUpsertNestedInput
  connect: PeopleWhereUniqueInput
}

input PeopleUpsertNestedInput {
  update: PeopleUpdateDataInput!
  create: PeopleCreateInput!
}

input PeopleWhereInput {
  person_id: ID
  person_id_not: ID
  person_id_in: [ID!]
  person_id_not_in: [ID!]
  person_id_lt: ID
  person_id_lte: ID
  person_id_gt: ID
  person_id_gte: ID
  person_id_contains: ID
  person_id_not_contains: ID
  person_id_starts_with: ID
  person_id_not_starts_with: ID
  person_id_ends_with: ID
  person_id_not_ends_with: ID
  person_name: String
  person_name_not: String
  person_name_in: [String!]
  person_name_not_in: [String!]
  person_name_lt: String
  person_name_lte: String
  person_name_gt: String
  person_name_gte: String
  person_name_contains: String
  person_name_not_contains: String
  person_name_starts_with: String
  person_name_not_starts_with: String
  person_name_ends_with: String
  person_name_not_ends_with: String
  family: FamilyWhereInput
  AND: [PeopleWhereInput!]
  OR: [PeopleWhereInput!]
  NOT: [PeopleWhereInput!]
}

input PeopleWhereUniqueInput {
  person_id: ID
}

type Query {
  answers(where: AnswersWhereUniqueInput!): Answers
  answerses(where: AnswersWhereInput, orderBy: AnswersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answers]!
  answersesConnection(where: AnswersWhereInput, orderBy: AnswersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswersConnection!
  employee(where: EmployeeWhereUniqueInput!): Employee
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee]!
  employeesConnection(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployeeConnection!
  family(where: FamilyWhereUniqueInput!): Family
  families(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Family]!
  familiesConnection(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FamilyConnection!
  people(where: PeopleWhereUniqueInput!): People
  peoples(where: PeopleWhereInput, orderBy: PeopleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [People]!
  peoplesConnection(where: PeopleWhereInput, orderBy: PeopleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PeopleConnection!
  question(where: QuestionWhereUniqueInput!): Question
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question]!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  survey(where: SurveyWhereUniqueInput!): Survey
  surveys(where: SurveyWhereInput, orderBy: SurveyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Survey]!
  surveysConnection(where: SurveyWhereInput, orderBy: SurveyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SurveyConnection!
  node(id: ID!): Node
}

type Question {
  question_id: ID!
  survey: Survey!
  family: Family!
  question_text: String!
}

type QuestionConnection {
  pageInfo: PageInfo!
  edges: [QuestionEdge]!
  aggregate: AggregateQuestion!
}

input QuestionCreateInput {
  question_id: ID
  survey: SurveyCreateOneInput!
  family: FamilyCreateOneInput!
  question_text: String!
}

input QuestionCreateOneInput {
  create: QuestionCreateInput
  connect: QuestionWhereUniqueInput
}

type QuestionEdge {
  node: Question!
  cursor: String!
}

enum QuestionOrderByInput {
  question_id_ASC
  question_id_DESC
  question_text_ASC
  question_text_DESC
}

type QuestionPreviousValues {
  question_id: ID!
  question_text: String!
}

type QuestionSubscriptionPayload {
  mutation: MutationType!
  node: Question
  updatedFields: [String!]
  previousValues: QuestionPreviousValues
}

input QuestionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuestionWhereInput
  AND: [QuestionSubscriptionWhereInput!]
  OR: [QuestionSubscriptionWhereInput!]
  NOT: [QuestionSubscriptionWhereInput!]
}

input QuestionUpdateDataInput {
  survey: SurveyUpdateOneRequiredInput
  family: FamilyUpdateOneRequiredInput
  question_text: String
}

input QuestionUpdateInput {
  survey: SurveyUpdateOneRequiredInput
  family: FamilyUpdateOneRequiredInput
  question_text: String
}

input QuestionUpdateManyMutationInput {
  question_text: String
}

input QuestionUpdateOneRequiredInput {
  create: QuestionCreateInput
  update: QuestionUpdateDataInput
  upsert: QuestionUpsertNestedInput
  connect: QuestionWhereUniqueInput
}

input QuestionUpsertNestedInput {
  update: QuestionUpdateDataInput!
  create: QuestionCreateInput!
}

input QuestionWhereInput {
  question_id: ID
  question_id_not: ID
  question_id_in: [ID!]
  question_id_not_in: [ID!]
  question_id_lt: ID
  question_id_lte: ID
  question_id_gt: ID
  question_id_gte: ID
  question_id_contains: ID
  question_id_not_contains: ID
  question_id_starts_with: ID
  question_id_not_starts_with: ID
  question_id_ends_with: ID
  question_id_not_ends_with: ID
  survey: SurveyWhereInput
  family: FamilyWhereInput
  question_text: String
  question_text_not: String
  question_text_in: [String!]
  question_text_not_in: [String!]
  question_text_lt: String
  question_text_lte: String
  question_text_gt: String
  question_text_gte: String
  question_text_contains: String
  question_text_not_contains: String
  question_text_starts_with: String
  question_text_not_starts_with: String
  question_text_ends_with: String
  question_text_not_ends_with: String
  AND: [QuestionWhereInput!]
  OR: [QuestionWhereInput!]
  NOT: [QuestionWhereInput!]
}

input QuestionWhereUniqueInput {
  question_id: ID
}

type Subscription {
  answers(where: AnswersSubscriptionWhereInput): AnswersSubscriptionPayload
  employee(where: EmployeeSubscriptionWhereInput): EmployeeSubscriptionPayload
  family(where: FamilySubscriptionWhereInput): FamilySubscriptionPayload
  people(where: PeopleSubscriptionWhereInput): PeopleSubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  survey(where: SurveySubscriptionWhereInput): SurveySubscriptionPayload
}

type Survey {
  survey_id: ID!
  dateTaken: DateTime!
  survey_name: String!
  employee: Employee!
}

type SurveyConnection {
  pageInfo: PageInfo!
  edges: [SurveyEdge]!
  aggregate: AggregateSurvey!
}

input SurveyCreateInput {
  survey_id: ID
  survey_name: String!
  employee: EmployeeCreateOneInput!
}

input SurveyCreateOneInput {
  create: SurveyCreateInput
  connect: SurveyWhereUniqueInput
}

type SurveyEdge {
  node: Survey!
  cursor: String!
}

enum SurveyOrderByInput {
  survey_id_ASC
  survey_id_DESC
  dateTaken_ASC
  dateTaken_DESC
  survey_name_ASC
  survey_name_DESC
}

type SurveyPreviousValues {
  survey_id: ID!
  dateTaken: DateTime!
  survey_name: String!
}

type SurveySubscriptionPayload {
  mutation: MutationType!
  node: Survey
  updatedFields: [String!]
  previousValues: SurveyPreviousValues
}

input SurveySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SurveyWhereInput
  AND: [SurveySubscriptionWhereInput!]
  OR: [SurveySubscriptionWhereInput!]
  NOT: [SurveySubscriptionWhereInput!]
}

input SurveyUpdateDataInput {
  survey_name: String
  employee: EmployeeUpdateOneRequiredInput
}

input SurveyUpdateInput {
  survey_name: String
  employee: EmployeeUpdateOneRequiredInput
}

input SurveyUpdateManyMutationInput {
  survey_name: String
}

input SurveyUpdateOneRequiredInput {
  create: SurveyCreateInput
  update: SurveyUpdateDataInput
  upsert: SurveyUpsertNestedInput
  connect: SurveyWhereUniqueInput
}

input SurveyUpsertNestedInput {
  update: SurveyUpdateDataInput!
  create: SurveyCreateInput!
}

input SurveyWhereInput {
  survey_id: ID
  survey_id_not: ID
  survey_id_in: [ID!]
  survey_id_not_in: [ID!]
  survey_id_lt: ID
  survey_id_lte: ID
  survey_id_gt: ID
  survey_id_gte: ID
  survey_id_contains: ID
  survey_id_not_contains: ID
  survey_id_starts_with: ID
  survey_id_not_starts_with: ID
  survey_id_ends_with: ID
  survey_id_not_ends_with: ID
  dateTaken: DateTime
  dateTaken_not: DateTime
  dateTaken_in: [DateTime!]
  dateTaken_not_in: [DateTime!]
  dateTaken_lt: DateTime
  dateTaken_lte: DateTime
  dateTaken_gt: DateTime
  dateTaken_gte: DateTime
  survey_name: String
  survey_name_not: String
  survey_name_in: [String!]
  survey_name_not_in: [String!]
  survey_name_lt: String
  survey_name_lte: String
  survey_name_gt: String
  survey_name_gte: String
  survey_name_contains: String
  survey_name_not_contains: String
  survey_name_starts_with: String
  survey_name_not_starts_with: String
  survey_name_ends_with: String
  survey_name_not_ends_with: String
  employee: EmployeeWhereInput
  AND: [SurveyWhereInput!]
  OR: [SurveyWhereInput!]
  NOT: [SurveyWhereInput!]
}

input SurveyWhereUniqueInput {
  survey_id: ID
}
`
      }
    