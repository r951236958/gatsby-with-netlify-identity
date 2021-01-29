import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import CircularProgress from "@material-ui/core/CircularProgress"
import { graphql, useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "../Container"
import Footer from "../Footer"

import TopBar from "../TopBar"
import Title from "../Title"

// import "../../styles/global.scss"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const identity = useIdentityContext() // see https://github.com/sw-yx/react-netlify-identity for api of this identity object
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"

  console.log(JSON.stringify(identity))

  const isLoggedIn = identity && identity.isLoggedIn

  const Header = ({ siteTitle }) => (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
  const Header2 = () => {
    return (
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
      </>
    )
  }

  // if (!isLoggedIn) {
  //   return (
  //     <Container textAlign="center">
  //       <div className="h-screen flex flex-col items-center content-center">
  //         <div className="my-auto">
  //           <Title>loading...</Title>
  //           <CircularProgress color="secondary" />
  //         </div>
  //       </div>
  //     </Container>
  //   )
  // }

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <TopBar
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <Header />
        <Header2 />
        <div className="flex flex-row items-center mx-auto">
          <div className="w-full h-16 inline-flex justify-center bg-gray-100 py-12">
            {" "}
            <div className="text-gray-800 text-lg mr-4">Login Status:</div>
            <div className="">
              <button
                className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                onClick={() => setDialog(true)}
              >
                <span className="mx-auto">
                  {" "}
                  {isLoggedIn ? `Hello ${name}, Log out here!` : `LOG IN`}
                </span>
              </button>
            </div>
          </div>

          <IdentityModal
            showDialog={dialog}
            onCloseDialog={() => setDialog(false)}
          />
        </div>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <Container className="min-h-screen" textAlign="center">
                {children}
              </Container>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: `Gatsby + Auth0`,
}

export default Layout
