const PersonForm = ({ submit, value1, change1, value2, change2 }) => {
  return (
    <>
      <form onSubmit={submit}>
        <div>
          name: <input value={value1} onChange={change1} />
        </div>
        <div>
          number: <input value={value2} onChange={change2} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
