import test from 'ava';
import m from './';

test('quora()', async t => {
	const user = await m('build', 'passing', 'green');

	t.is(user.default, 'https://img.shields.io/badge/build-passing-green.svg');
	t.is(user.plastic, 'https://img.shields.io/badge/build-passing-green.svg?style=plastic');
	t.is(user.flat, 'https://img.shields.io/badge/build-passing-green.svg?style=flat');
	t.is(user.flatSquared, 'https://img.shields.io/badge/build-passing-green.svg?style=flat-square');
	t.is(user.social, 'https://img.shields.io/badge/build-passing-green.svg?style=social');
});
