import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>
};

export type HelloQueryQueryVariables = {};


export type HelloQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const HelloQueryDocument = gql`
    query HelloQuery {
  hello(name: "Guru")
}
    `;
export type HelloQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HelloQueryQuery, HelloQueryQueryVariables>, 'query'>;

    export const HelloQueryComponent = (props: HelloQueryComponentProps) => (
      <ApolloReactComponents.Query<HelloQueryQuery, HelloQueryQueryVariables> query={HelloQueryDocument} {...props} />
    );
    
export type HelloQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<HelloQueryQuery, HelloQueryQueryVariables> & TChildProps;
export function withHelloQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloQueryQuery,
  HelloQueryQueryVariables,
  HelloQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HelloQueryQuery, HelloQueryQueryVariables, HelloQueryProps<TChildProps>>(HelloQueryDocument, {
      alias: 'helloQuery',
      ...operationOptions
    });
};

/**
 * __useHelloQueryQuery__
 *
 * To run a query within a React component, call `useHelloQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQueryQuery, HelloQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloQueryQuery, HelloQueryQueryVariables>(HelloQueryDocument, baseOptions);
      }
export function useHelloQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQueryQuery, HelloQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloQueryQuery, HelloQueryQueryVariables>(HelloQueryDocument, baseOptions);
        }
export type HelloQueryQueryHookResult = ReturnType<typeof useHelloQueryQuery>;
export type HelloQueryLazyQueryHookResult = ReturnType<typeof useHelloQueryLazyQuery>;
export type HelloQueryQueryResult = ApolloReactCommon.QueryResult<HelloQueryQuery, HelloQueryQueryVariables>;