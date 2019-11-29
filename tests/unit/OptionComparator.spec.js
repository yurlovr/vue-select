import Select from '../../src/components/Select';

describe('Comparing Options', () => {

  const comparator = Select.methods.optionComparator.bind({
    getOptionKey: Select.props.getOptionKey.default,
  });

  it('can compare numbers', () => {
    expect(comparator(1, 2)).toBeFalsy();
    expect(comparator(1, 1)).toBeTruthy();
  });

  it('can compare strings', () => {
    expect(comparator('one', 'one')).toBeTruthy();
    expect(comparator('one', 'two')).toBeFalsy();
  });

  it('can compare objects', () => {
    expect(comparator({label: 'halo', id: 1}, {label: 'halo', id: 2}))
      .toBeFalsy();

    expect(comparator({label: 'halo', id: 1}, {label: 'halo', id: 1}))
      .toBeTruthy();
  });

});
