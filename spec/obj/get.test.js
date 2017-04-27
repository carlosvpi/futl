var get = require('../../src/obj/get');

describe('Get', function() {
  it('gests a deep property of an object', function() {
    var abraham = {
      name: 'abraham',
      children: [
        {
          name: 'homer',
          children: [
            { name: 'bart' },
            { name: 'lisa' }
          ]
        },
        { name: 'herbert' }
      ],
    };

    expect(get('name', abraham)).toEqual(abraham.name);
    expect(get(['children', 0, 'children', 0, 'name'], abraham)).toEqual(abraham.children[0].children[0].name);
    expect(get(['children', 0, 'children', 4, 'name'], abraham)).toBe(undefined);
  });
})
