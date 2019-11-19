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

export type PageContent = {
   __typename?: 'PageContent',
  welcome?: Maybe<Scalars['String']>,
  properties?: Maybe<Array<Maybe<Property>>>,
};


export type PageContentWelcomeArgs = {
  title?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};


export type PageContentPropertiesArgs = {
  postcode?: Maybe<Scalars['String']>
};

export type Property = {
   __typename?: 'Property',
  address?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  pageContent?: Maybe<PageContent>,
};


export type QueryPageContentArgs = {
  title?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};

export type HelloQueryVariables = {
  title?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  postcode?: Maybe<Scalars['String']>
};


export type HelloQuery = (
  { __typename?: 'Query' }
  & { pageContent: Maybe<(
    { __typename?: 'PageContent' }
    & Pick<PageContent, 'welcome'>
    & { properties: Maybe<Array<Maybe<(
      { __typename?: 'Property' }
      & Pick<Property, 'address'>
    )>>> }
  )> }
);


export const HelloDocument = gql`
    query Hello($title: String, $surname: String, $postcode: String) {
  pageContent {
    welcome(title: $title, name: $surname)
    properties(postcode: $postcode) {
      address
    }
  }
}
    `;
export type HelloComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HelloQuery, HelloQueryVariables>, 'query'>;

    export const HelloComponent = (props: HelloComponentProps) => (
      <ApolloReactComponents.Query<HelloQuery, HelloQueryVariables> query={HelloDocument} {...props} />
    );
    
export type HelloProps<TChildProps = {}> = ApolloReactHoc.DataProps<HelloQuery, HelloQueryVariables> & TChildProps;
export function withHello<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloQuery,
  HelloQueryVariables,
  HelloProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, HelloQuery, HelloQueryVariables, HelloProps<TChildProps>>(HelloDocument, {
      alias: 'hello',
      ...operationOptions
    });
};

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *      title: // value for 'title'
 *      surname: // value for 'surname'
 *      postcode: // value for 'postcode'
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQuery, HelloQueryVariables>;