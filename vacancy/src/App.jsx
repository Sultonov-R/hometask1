import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import Textarea from "./components/textarea";
import Button from "./components/buttons";
import Dropdowns from "./components/dropdowns";

function App() {

  const [formData, setFormData] = useState({
    title: '',
    titleError:'',
    workType: '',
    workTypeError:'',
    workTime: '',
    workTimeError:'',
    country: '',
    countryError:'',
    city: '',
    cityError:'',
    language: '',
    languageError:'',
    levelUp: '',
    levelUpError:'',
    field: '',
    fieldError:'',
    skills: '',
    skillsError:'',
    minSalary: '',
    minSalaryError:'',
    maxSalary: '',
    maxSalaryError:'',
    bargain: false,
    salaryDeadline: '',
    salaryDeadlineError:'',
    currency: '',
    currencyError:'',
    eduLevel: '',
    eduLevelError:'',
    experience: '',
    experienceError:'',
    description: '',
    descriptionError:'',
  })

  const [workType, setWorkType] = useState([
    {
      id: 1,
      text: "Offline",
    },
    {
      id: 2,
      text: "Online",
    },
  ]);

  const [workTime, setWorkTime] = useState([
    {
      id: 1,
      text: "8:00-14:00",
    },
    {
      id: 2,
      text: "14:00-20:00",
    },
    {
      id: 3,
      text: "20:00-02:00",
    },
  ]);

  const [country, setCountry] = useState([
    {
      id: 1,
      text: "O'zbekiston",
    },
    {
      id: 2,
      text: "Germaniya",
    },
    {
      id: 3,
      text: "Qatar",
    },
    {
      id: 4,
      text: "AQSH",
    },
  ]);

  const [city, setCity] = useState([
    {
      id: 1,
      text: "Farg'ona",
    },
    {
      id: 2,
      text: "Toshkent",
    },
    {
      id: 3,
      text: "Berlin",
    },
    {
      id: 4,
      text: "New York",
    },
  ]);

  const [language, setLanguage] = useState([
    {
      id: 1,
      text: "O'zbekcha",
    },
    {
      id: 2,
      text: "Inglizcha",
    },
    {
      id: 3,
      text: "Ruscha",
    },
    {
      id: 4,
      text: "Nemischa",
    },
  ]);

  const [levelUp, setLevelUp] = useState([
    {
      id: 1,
      Text: "Bilmayman",
    },
    {
      id: 2,
      Text: "Boshlangich",
    },
    {
      id: 3,
      Text: "O'rta darajada",
    },
    {
      id: 4,
      Text: "Yaxshi",
    },
  ]);

  const [salary, setSalary] = useState([
    {
      id: 1,
      text: "1000000",
    },
    {
      id: 2,
      text: "2000000",
    },
    {
      id: 3,
      text: "3000000",
    },
    {
      id: 4,
      text: "4000000",
    },
  ]);

  const [salaryDeadline, setSalaryDeadline] = useState([
    {
      id: 1,
      text: "Kunlik",
    },
    {
      id: 2,
      text: "Haftalik",
    },
    {
      id: 3,
      text: "Oylik",
    },
  ]);

  const [currency, setCurrency] = useState([
    {
      id: 1,
      text: "Dollar",
    },
    {
      id: 2,
      text: "So'm",
    },
    {
      id: 3,
      text: "Yevro",
    },
  ]);

  const [eduLevel, setEduLevel] = useState([
    {
      id: 1,
      text: "Boshlang'ich",
    },
    {
      id: 2,
      text: "O'rta ma'lumotli",
    },
    {
      id: 3,
      text: "Oliy ma'lumotli",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      id: 1,
      text: "3 oy",
    },
    {
      id: 2,
      text: "6 oy",
    },
    {
      id: 3,
      text: "1 yil",
    },
    {
      id: 4,
      text: "2 yil",
    },
  ]);

  return (
    <>
      <div className="form-wrapper">
        <h1 className="form-title">Vakansiya yaratish</h1>
        <h3 className="form-subtitle">Yangi vakansiya uchun ma’lumotlar</h3>
        <Input
          title="Sarlavha"
          placeholder="Sarlavha"
          isRequired={true}
          name="title"
          id="title"
        />
        <div className="job-info">
          <Dropdowns
            title="Ariza topshirish muddati"
            id="application"
            isRequired={true}
          />
          <Dropdowns
            title="Ish turi"
            id="work-type"
            isRequired={true}
            data={workType}
          />
          <Dropdowns
            title="Ish vaqti"
            id="work-time"
            isRequired={true}
            data={workTime}
          />
        </div>

        <div className="region">
          <Dropdowns
            title="Davlat"
            id="country"
            isRequired={true}
            data={country}
          />
          <Dropdowns title="Shahar" id="city" isRequired={true} data={city} />
        </div>
        <div className="language-info">
          <Dropdowns
            title="Til"
            id="language"
            isRequired={true}
            data={language}
          />
          <Dropdowns
            title="Darajasi"
            id="level"
            isRequired={true}
            data={levelUp}
          />
        </div>

        <div className="field-info">
          <Input
            title="Soha"
            placeholder="Soha"
            isRequired={true}
            name="field"
            id="field"
          />
        </div>
        <div className="skills">
          <Input
            title="Ko'nikmalar"
            placeholder="Ko'nikmalar"
            isRequired={true}
            name="skills"
            id="skills"
          />
        </div>

        <div className="salary">
          <Dropdowns
            title="Minimal maosh"
            id="min-salary"
            isRequired={true}
            data={salary}
          />
          <Dropdowns
            title="Maksimal maosh"
            id="max-salary"
            isRequired={true}
            data={salary}
          />
        </div>

        <div className="bargain">
          <input type="checkbox" name="" id="bargain" />
          <label htmlFor="bargain">Kelishiladi</label>
        </div>

        <div className="salary-deadline">
          <Dropdowns
            title="Maosh muddati"
            id="salary-deadline"
            isRequired={true}
            data={salaryDeadline}
          />
          <Dropdowns
            title="Valyuta"
            id="currency"
            isRequired={true}
            data={currency}
          />
        </div>

        <div className="education-level">
          <Dropdowns
            title="Ta'lim darajasi"
            id="edu-level"
            isRequired={true}
            data={eduLevel}
          />
          <Dropdowns
            title="Tajriba"
            id="experience"
            isRequired={true}
            data={experience}
          />
        </div>

        <Textarea
          id="description"
          name="Izoh"
          placeholder="Vakansiya uchun izoh qoldiring"
          title="Izoh"
          isRequired={false}
        />

        <div className="btn-group">
          <Button classes='gray-button' title="Ortga" />
          <Button classes='blue-button' title="Davom etish" />
        </div>
      </div>
    </>
  );
}

export default App;
