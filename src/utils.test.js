import { template } from './utils'

describe('template', () => {

	test('is function', () => {
		expect(typeof template == 'function').toBe(true)
	})

	test('returns blank if message is blank', () => {
		const actual = template('')
		expect(actual).toBe('')
	})

	test('returns message', () => {
		const actual = template('hello')
		expect(actual).toBe('hello')
	})

	test('returns interpolated message', () => {
		const actual = template('hello {foo}', { foo: 'world'})
		expect(actual).toBe('hello world')
	})

  test('returns interpolated message with spaces', () => {
    const actual = template('hello {   foo   }', { foo: 'world'})
    expect(actual).toBe('hello world')
  })

	test('does not throw if value is not an object', () => {
		const actual = template('hello world', 'test')
		expect(actual).toBe('hello world')
	})

  test('returns interpolated message via rest props', () => {
    const actual = template('hello {foo}', {}, { foo: 'world' })
    expect(actual).toBe('hello world')
  })

  test('returns interpolated message and discards rest props', () => {
    const actual = template('hello {foo}', { foo: 'test' }, { foo: 'world' })
    expect(actual).toBe('hello test')
  })

})
