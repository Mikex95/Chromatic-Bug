import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
export const URLComp = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
          <div id="portal-root-2"></div>
          <h1 >Some Title</h1>
          <Dialog
            visible={isOpen}
            blockScroll={true}
            resizable={false}
            onHide={() => setIsOpen(false)}
            style={{backgroundColor: 'green' , width: '50vw', height: '50vh'}}
          >
            Yeah!
          </Dialog>
          <br />
          <button
            data-testid="test-button"
            onClick={() => setIsOpen(true)}
          >
            Click me to open
          </button>
        </div>
      );
    };



    export const Default: Story = {
        render: () => <URLComp />
      };
      
      export const InterActionOne: Story = {
        play: async ({ canvasElement, step }) => {
          const canvas = within(canvasElement);

      
          await step('Click Button', async () => {
            await userEvent.click(canvas.getByRole('button'));
          });
        },
        ...Default
      };

const meta: Meta<typeof URLComp> = {
    argTypes: {},
    title: 'WIDGETS/url',
    component: URLComp
  };
  
  export default meta;
  
  type Story = StoryObj<typeof URLComp>;

