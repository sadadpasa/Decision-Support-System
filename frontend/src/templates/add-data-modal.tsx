import Modal from "@/components/modal";
import TextField from "@/components/text-field";
import useDataset from "@/store/use-dataset";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { BsPlusLg } from "react-icons/bs";

type AddDataModalProps = {
  open: boolean;
  onClose: () => void;
};

const AddDataModal = (props: AddDataModalProps) => {
  const pushData = useDataset((store) => store.push);
  const { control, handleSubmit, getValues } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      attendance: "",
      age: "",
      salary: "",
      distance: "",
      gpa: "",
      psychotest: "",
    },
  });

  const submit = () => {
    const body = getValues();
    pushData({
      name: body.name,
      attendance: +body.attendance,
      age: +body.age,
      salary: +body.salary,
      distance: +body.distance,
      gpa: +body.gpa,
      psychotest: +body.psychotest,
    });
    props.onClose();
  };

  const close = () => {
    props.onClose();
  };

  return (
    <Modal
      title="Add Data"
      open={props.open}
      onClose={close}
      buttons={
        <>
          <Button onClick={close}>Close</Button>
          <Button
            colorScheme="green"
            leftIcon={<BsPlusLg />}
            onClick={handleSubmit(submit)}
          >
            Add
          </Button>
        </>
      }
    >
      <VStack as="form" spacing="4" alignItems="unset">
        <TextField
          control={control}
          name="name"
          label="name"
          rules={{ required: true }}
        />
        <HStack spacing="4">
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="attendance"
              label="attendance"
              type="number"
              rules={{ required: true }}
            />
            <TextField
              control={control}
              name="age"
              label="age"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="salary"
              label="salary"
              type="number"
              rules={{ required: true }}
            />
            <TextField
              control={control}
              name="distance"
              label="distance"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="gpa"
              label="gpa"
              type="number"
              rules={{ required: true }}
            />
            <TextField
              control={control}
              name="psychotest"
              label="psychotest"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default AddDataModal;
