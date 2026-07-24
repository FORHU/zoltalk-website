import type { Meta, StoryObj } from '@storybook/react';
import { DrowsyHero } from '@/features/landing/components/DrowsyHero';

const meta = {
  title: 'Features/Landing/DrowsyHero',
  component: DrowsyHero,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The main landing page experience with cinematic sequence and product reveal.',
      },
    },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DrowsyHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
