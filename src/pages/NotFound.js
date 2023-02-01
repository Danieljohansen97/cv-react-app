import React from "react"
import { Link } from "react-router-dom"
// Bootstrap
import { Container, Button } from "react-bootstrap"

export default function NotFound() {
  return (
    <Container fluid className="text-center">
      <h2>Oops!</h2>
      <p>The page was not found :(</p>
      <Link to="/">
        <Button size="lg" variant="link">Go back to home page</Button>
      </Link>
    </Container>
  )
}
