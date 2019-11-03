import React from 'react'
import styled from 'styled-components'

const ProfilePicWrapper = styled.img`
  border-radius: 50%;
  width: 80%;
  max-height: 350px;
`

const ProfilePicture = ({ mentorUrl }) => (
  <ProfilePicWrapper
    alt="Profile picture"
    src={require(`../public/img/${mentorUrl}`)}
  />
)

export default ProfilePicture
