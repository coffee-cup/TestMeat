describe('test', function() {
  it('tests header-text', function() {
    expect($('.header-text').text().trim()).toEqual('Hello, How are you?');
  });

  it('test function', function() {
    expect(addPlusOne(2, 3)).toEqual(6);
  });
});
