import useAccountSetting from "../hooks";
import {
  LegendBox,
  LabelText,
  LegendTitle,
  LegendItem,
  LegendField,
  TextErrorInput,
} from "../styles";
import { FormInput } from "@/components/FormInput";
import Select from "@/components/Select";

function UserManagerment() {
  const { } = useAccountSetting();
  return (
    <div className="body-section">
      <div className="body-section-item">
        <LegendBox className="w-100">
          <LegendTitle>User Detail</LegendTitle>
          <div className="user-title">
            In this section, you can create new user (employee) for your agency and assign roles.
          </div>
          <div className="user-title">
            Existing Users
          </div>
        </LegendBox >
      </div>
    </div>
  );
}

export default UserManagerment;
