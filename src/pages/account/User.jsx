import React from 'react'
import { Link, Outlet, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

// import Profile from './Profile';
// import Invoice from './Invoice';
// import Bio from './Bio';

const users = [
  {
    id: 1,
    name: 'Tony Stark',
  },
  {
    id: 2,
    name: 'Khoi Stark',
  }
]

function User() {
  // const [tab, setTab] = React.useState('profile')
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log('location: ', {
    page: searchParams.get('page'),
    location
  })

  function handleGoBackHome() {
    navigate('/')
  }

  function handleDetail(userId) {
    navigate(`/user/${userId}`)
  }

  return (
    <div>
      {users.map(user => (
        <React.Fragment key={user.id}>
          First Name: {user.name} <br />
          <button type="button" onClick={() => handleDetail(user.id)}>View Detail</button>
          <br />
        </React.Fragment>
      ))}
     <br />
      <button type="button" onClick={handleGoBackHome}>Go back home</button>

      <ul>
        {/* <li onClick={() => setTab('profile')}>Profile</li>
        <li onClick={() => setTab('invoice')}>Invoice</li>
        <li onClick={() => setTab('bio')}>Bio</li> */}

        <li><Link to="profile">Profile</Link></li>
        <li><Link to="invoice">Invoice</Link></li>
        <li><Link to="bio">Bio</Link></li>

      </ul>

      <Outlet />

      {/* {tab === 'profile' && <Profile /> }
      {tab === 'invoice' && <Invoice /> }
      {tab === 'bio' && <Bio /> } */}
    </div>
  )
}

export default User