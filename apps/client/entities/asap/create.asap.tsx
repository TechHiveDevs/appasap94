
import { 
  Create,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateAsap(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="weee" variant="outlined"   />
<ReferenceInput label="app" source="appid" reference="app">
        <AutocompleteInput variant="outlined" /* optionText="app"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
