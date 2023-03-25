import User from "@/components/user"

const UsersData = ({ users }) => {
  return (
    <div>
      <h1>Users Data</h1>
      { users.map(user => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        )
      })}
    </div>
  )
}

export default UsersData

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  //console.log(data)

  return {
    props: {
      users: data,
    }
  }
}

