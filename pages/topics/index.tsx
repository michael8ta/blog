import { GetStaticPropsResult } from 'next'
import { getSortedPostsData, getSortedTopics } from '../../src/lib/posts'

import React, { ReactElement } from 'react'
import TopicsDisplay from '../../src/components/TopicsDisplay'
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { PostData } from '../../src/types/posts'
import { Preview } from '../../src/components/Preview'
import { PageHeading } from '../../src/components/PageHeading'
import Head from 'next/head'

const Topics = ({ topics, postsData }: { topics: string[]; postsData: PostData[] }): ReactElement => {
  return (
    <>
      <Head>
        <title>My Personal Page</title>
        <meta name="description" content={'Tech topics like ' + topics.slice(0, 5).join(', ') + ' and more'} />
      </Head>
      <PageHeading title="This is the personal web site of Michael Taodrous, AKA michael8ta." />
      <TopicsDisplay topics={topics} n={1000} />
      <Box pt={12} pb={4}>
        <Grid item xs={12}>
          <Preview posts={postsData} />
        </Grid>
      </Box>
    </>
  )
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<{
    topics: string[]
    postsData: PostData[]
  }>
> => {
  const sortedTopics = getSortedTopics()
  const postsData = getSortedPostsData()

  return {
    props: {
      topics: sortedTopics,
      postsData: postsData.filter((pd) => pd.featured),
    },
  }
}

export default Topics
