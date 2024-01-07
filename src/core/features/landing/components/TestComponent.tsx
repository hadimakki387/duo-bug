import DBAccordion from "@/components/global/DBAccordion";
import DBButton from "@/components/global/DBButton";
import DBCheckBox from "@/components/global/DBCheckBox";
import DBDialog from "@/components/global/DBDialog";
import DBDrawer from "@/components/global/DBDrawer";
import DBTabs from "@/components/global/DBTabs";
import DBTextField from "@/components/global/DBTextField";
import { useAppSelector } from "@/core/StoreWrapper";
import {
  setDialog,
  setDrawer,
  setTabs,
  setText,
} from "@/core/features/landing/redux/landing-slice";
import { useLoginMutation } from "@/core/rtk-query/landing";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

type Props = {};

function TestComponent({}: Props) {
  const { text, Dialog, tabs, drawer } = useAppSelector(
    (state) => state.landing
  );
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [res, setRes]: any = useState();
  return (
    <main className="grid grid-cols-7 gap-8 p-8">
      <div className="col-span-1">
        <DBButton label="Hello" variant="contained" />
      </div>
      <div className="col-span-1">
        <DBButton label="Hello" variant="contained" color="secondary" />
      </div>
      <div className="col-span-1">
        <DBButton label="Hello" variant="contained" color="error" />
      </div>
      <div className="col-span-1">
        <DBTextField label="Hello" color="error" leadingText="Hello" />
      </div>

      <div className="space-y-4">
        <DBTextField
          label="change text"
          color="error"
          leadingText="Hello"
          onChange={(e) => {
            dispatch(setText(e.target.value));
          }}
        />
        <DBButton
          label="change text"
          variant="outlined"
          onClick={() => {
            dispatch(setText("this is the text"));
            console.log("clicked");
          }}
        />
        <div>{text}</div>
      </div>

      <div className="space-y-4">
        <DBButton
          label="fetch data"
          variant="outlined"
          onClick={() => {
            const id = toast.loading("loading");
            login({
              email: "user@me.com",
              password: "12345678",
            })
              .unwrap()
              .then((res) => {
                setRes(res);
                toast.success("success", {id});
              })
              .catch((err) => {
                console.log(err);
                toast.error("error", { id });
              });
          }}
        />
        <div>
          <pre>{JSON.stringify(res?.user)}</pre>
        </div>
        <div>
          <DBButton
            label="clear data"
            variant="contained"
            color="error"
            onClick={() => {
              setRes(undefined);
            }}
          />
        </div>
      </div>
      <div>
        <DBButton
          label="dialog"
          variant="contained"
          color="error"
          onClick={() => {
            dispatch(setDialog(true));
          }}
        />
        <DBDialog
          open={Dialog}
          onClose={() => {
            dispatch(setDialog(false));
          }}
        />
      </div>
      <div>
        <DBTabs
          tabs={["THIS", "THAT"]}
          onChange={(e) => {
            dispatch(setTabs(e));
          }}
          value={tabs}
        />
      </div>
      <div className="flex gap-2 items-center">
        <DBCheckBox />
        <DBCheckBox isSwitch />
      </div>
      <div>
        <DBButton
          label="open drawer"
          variant="contained"
          onClick={() => {
            dispatch(setDrawer(true));
          }}
        />
        <DBDrawer
          open={drawer}
          onOpen={() => {
            console.log("open");
          }}
          onClose={() => {
            dispatch(setDrawer(false));
          }}
          title="Hello"
        />
      </div>
      <div>
        <DBAccordion
          content={[
            {
              title: "this is the title",
              content: "this is the content",
              id: "1",
            },
          ]}
        />
      </div>
      <div>
        <DBButton
          label="toast"
          variant="contained"
          onClick={() => {
            toast.error("this is a toast");
          }}
        />
      </div>
    </main>
  );
}

export default TestComponent;
