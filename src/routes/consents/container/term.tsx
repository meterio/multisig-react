import React, { ReactElement } from 'react'

import Page from 'src/components/layout/Page'

import Terms from 'src/routes/consents/assets/term'

const UserTerm = (): ReactElement => {
  return (
    <Page align="center">
      <h2>TERMS OF USE</h2>
      {
        Terms.map((term, index) => {
          return (
            <div key={index}>
              <h3>{term.title}</h3>
              <div>
                {
                  term.contents.map((c, i) => {
                    return (
                      <p key={i}>{c}</p>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </Page>
  )
}

export default UserTerm