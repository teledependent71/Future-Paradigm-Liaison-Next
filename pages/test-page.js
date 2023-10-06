import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Future Paradigm Liaison</title>
          <meta
            property="og:title"
            content="test-page - Future Paradigm Liaison"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_fwg5t) => (
            <>
              <h1>{context_fwg5t?.Name}</h1>
            </>
          )}
          initialData={props.contextFwg5tProp}
          persistDataDuringLoading={true}
          key={props?.contextFwg5tProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextFwg5tProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextFwg5tProp: contextFwg5tProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
