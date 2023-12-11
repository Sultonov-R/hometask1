import "./App.css";
import Input from "./components/input";
import Textarea from "./components/textarea";
import Button from "./components/buttons";
import Dropdowns from "./components/dropdowns";

function App() {
  return (
    <>
      <div className="form-wrapper">
        <Input
          id="title"
          name="title"
          title="Sarlavha"
          placeholder="search"
          isRequired={true}
        />

        <Textarea
          id="description"
          title="Izoh"
          placeholder="Izoh"
          isRequired={true}
          name="desc"
        />
        <Dropdowns isRequired={true} title="Ish vaqti" />

        <Button classes="blue-button" title="Davom etish" />
      </div>
    </>
  );
}

export default App;
