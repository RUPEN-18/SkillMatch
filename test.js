const test=require('node:test'),a=require('node:assert/strict'),{compare}=require('./core');
test('coverage and deduplication',()=>{const r=compare('Python and SQL','python, Docker, SQL, PYTHON');a.equal(r.score,67);a.equal(r.total,3);a.deepEqual(r.missing,['Docker'])});
test('boundaries and literal symbols',()=>{const r=compare('JavaScript, C++, Node.js','Java, C++, Node.js');a.deepEqual(r.missing,['Java']);a.equal(r.score,67)});
test('empty input',()=>a.throws(()=>compare('','SQL')));
