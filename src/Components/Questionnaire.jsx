function Questionnaire() {
  return (
    <select
      className="bg-white rounded-[10px] w-full h-11 p-2.5 text-gray-500 cursor-pointer"
      id="question"
      defaultValue=""
    >

      <option value="" disabled hidden>Select a question</option>
      <option value="question1">What is your favorite color?</option>
      <option value="question2">What is your pet's name?</option>
      <option value="question3">What is your mother's maiden name?</option>
      <option value="question4">In what city were you born?</option>
      <option value="question5">What is your favorite food?</option>
    </select>
  );
}

export default Questionnaire;