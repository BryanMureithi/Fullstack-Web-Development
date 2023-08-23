const Filter = ({ value, handler }) => {
  return (
    <>
      <div>
        Search: <input value={value} onChange={handler} />
      </div>
    </>
  );
};

export default Filter;
