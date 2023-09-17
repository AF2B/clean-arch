import { validate as uuidValidate } from "uuid"
import { Entity } from "../../entity"

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity', () => {
  it('should set props and id', () => {
    const props = { prop1: 'prop1', prop2: 2 }
    const entity = new StubEntity(props)

    expect(entity.props).toEqual(props)
    expect(entity.props).toStrictEqual(props)
    expect(entity.id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('should accept an valid id', () => {
    const props = { prop1: 'prop1', prop2: 2 }
    const id = '7a600578-ee13-433b-ad04-b8a650bca552'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('should convert to json', () => {
    const props = { prop1: 'prop1', prop2: 2 }
    const entity = new StubEntity(props)

    expect(entity.toJSON()).toEqual({ id: entity._id, ...props })
    expect(entity.toJSON()).toStrictEqual({ id: entity._id, ...props })
  })
})
