import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder"
import { UserEntity, UserProps } from "../../user.entity"

describe('UserEntity', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })

  it('should be defined (constructor)', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('should be defined (getters)', () => {
    expect(sut.name).toEqual(props.name)
    expect(sut.email).toEqual(props.email)
    expect(sut.password).toEqual(props.password)
  })

  it('should be defined (setters)', () => {
    sut['name'] = 'new name'
    sut['password'] = 'new password'

    expect(sut.props.name).toEqual('new name')
    expect(sut.props.password).toEqual('new password')
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('should be correctly types', () => {
    expect(sut).toBeInstanceOf(UserEntity)
    expect(typeof sut.props.name).toBe('string')
    expect(typeof sut.props.email).toBe('string')
    expect(typeof sut.props.password).toBe('string')
    expect(sut.props.createdAt).toBeInstanceOf(Date)
    expect(sut.props.updatedAt).toBeInstanceOf(Date)
  })

  it('should update an user', () => {
    const newName = 'new name'
    sut.update(newName)

    expect(sut.props.name).toEqual(newName)
  })

  it('should update an user password', () => {
    const newPassword = 'new password'
    sut.updatePassword(newPassword)

    expect(sut.props.password).toEqual(newPassword)
  })
})
