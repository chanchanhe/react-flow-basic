import { Button, Menu, Portal } from "@chakra-ui/react";
import { ChevronBarDown } from "react-bootstrap-icons";
import { useReactFlow } from "reactflow";

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

export const PaymentProviderSelect = () => {
  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
    const location = Math.random() * 500;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "paymentProvider",
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Add Payment Provider <ChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {PAYMENT_PROVIDERS.map((provider) => (
              <Menu.Item
                key={provider.code}
                value={provider.code}
                onClick={() => onProviderClick(provider)}
              >
                {provider.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
