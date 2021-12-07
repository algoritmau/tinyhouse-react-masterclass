import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Host, Listing, Listings, NotFound, User } from 'pages'

const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listing/:id" element={<Listing />} />
        <Route path="listings/:city" element={<Listings />} />
        <Route path="host" element={<Host />} />
        <Route path="user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export const Layout = () => {
  return (
    <div className="layout">
      <Page />
    </div>
  )
}
