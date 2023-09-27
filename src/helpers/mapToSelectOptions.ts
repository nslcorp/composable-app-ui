export const mapToSelectOptions = (records: string[]) => {
  const options = records.map((record) => ({
    label: record,
    value: record,
  }));

  return options
}