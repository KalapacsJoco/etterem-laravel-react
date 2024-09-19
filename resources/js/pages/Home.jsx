import Layout from './Layout'

const Home = () => {
  return (
    <>
      <p>Hello, welcome to your first Inertia app!</p>
    </>
  )
}

Home.layout = page => <Layout children={page} title="Welcome" />

export default Home