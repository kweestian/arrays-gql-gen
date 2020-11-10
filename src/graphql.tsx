import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CustomFieldFilterInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUsersArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Array<Maybe<CustomFieldFilterInput>>>;
};

export type CustomField = {
  __typename?: 'CustomField';
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type Node = {
  id: Scalars['ID'];
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  customfields?: Maybe<Array<Maybe<CustomField>>>;
};

export type FindUserOrUsersQueryVariables = Exact<{
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Array<Maybe<CustomFieldFilterInput>>>;
}>;


export type FindUserOrUsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )>>> }
);

export type FindUsersStringQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUsersStringQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )>>> }
);

export type FindUsersArrayQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUsersArrayQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )>>> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  username
}
    `;
export const FindUserOrUsersDocument = gql`
    query findUserOrUsers($userIds: [ID], $customFields: [CustomFieldFilterInput]) {
  users(ids: $userIds, customFields: $customFields) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useFindUserOrUsersQuery__
 *
 * To run a query within a React component, call `useFindUserOrUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserOrUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserOrUsersQuery({
 *   variables: {
 *      userIds: // value for 'userIds'
 *      customFields: // value for 'customFields'
 *   },
 * });
 */
export function useFindUserOrUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindUserOrUsersQuery, FindUserOrUsersQueryVariables>) {
        return Apollo.useQuery<FindUserOrUsersQuery, FindUserOrUsersQueryVariables>(FindUserOrUsersDocument, baseOptions);
      }
export function useFindUserOrUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserOrUsersQuery, FindUserOrUsersQueryVariables>) {
          return Apollo.useLazyQuery<FindUserOrUsersQuery, FindUserOrUsersQueryVariables>(FindUserOrUsersDocument, baseOptions);
        }
export type FindUserOrUsersQueryHookResult = ReturnType<typeof useFindUserOrUsersQuery>;
export type FindUserOrUsersLazyQueryHookResult = ReturnType<typeof useFindUserOrUsersLazyQuery>;
export type FindUserOrUsersQueryResult = Apollo.QueryResult<FindUserOrUsersQuery, FindUserOrUsersQueryVariables>;
export const FindUsersStringDocument = gql`
    query findUsersString {
  users(ids: 123, customFields: {value: "123", id: 123}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useFindUsersStringQuery__
 *
 * To run a query within a React component, call `useFindUsersStringQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersStringQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersStringQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUsersStringQuery(baseOptions?: Apollo.QueryHookOptions<FindUsersStringQuery, FindUsersStringQueryVariables>) {
        return Apollo.useQuery<FindUsersStringQuery, FindUsersStringQueryVariables>(FindUsersStringDocument, baseOptions);
      }
export function useFindUsersStringLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUsersStringQuery, FindUsersStringQueryVariables>) {
          return Apollo.useLazyQuery<FindUsersStringQuery, FindUsersStringQueryVariables>(FindUsersStringDocument, baseOptions);
        }
export type FindUsersStringQueryHookResult = ReturnType<typeof useFindUsersStringQuery>;
export type FindUsersStringLazyQueryHookResult = ReturnType<typeof useFindUsersStringLazyQuery>;
export type FindUsersStringQueryResult = Apollo.QueryResult<FindUsersStringQuery, FindUsersStringQueryVariables>;
export const FindUsersArrayDocument = gql`
    query findUsersArray {
  users(ids: [123], customFields: [{value: "123", id: 123}]) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useFindUsersArrayQuery__
 *
 * To run a query within a React component, call `useFindUsersArrayQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersArrayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersArrayQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUsersArrayQuery(baseOptions?: Apollo.QueryHookOptions<FindUsersArrayQuery, FindUsersArrayQueryVariables>) {
        return Apollo.useQuery<FindUsersArrayQuery, FindUsersArrayQueryVariables>(FindUsersArrayDocument, baseOptions);
      }
export function useFindUsersArrayLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUsersArrayQuery, FindUsersArrayQueryVariables>) {
          return Apollo.useLazyQuery<FindUsersArrayQuery, FindUsersArrayQueryVariables>(FindUsersArrayDocument, baseOptions);
        }
export type FindUsersArrayQueryHookResult = ReturnType<typeof useFindUsersArrayQuery>;
export type FindUsersArrayLazyQueryHookResult = ReturnType<typeof useFindUsersArrayLazyQuery>;
export type FindUsersArrayQueryResult = Apollo.QueryResult<FindUsersArrayQuery, FindUsersArrayQueryVariables>;