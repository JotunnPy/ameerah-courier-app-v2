import React from 'react';
import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const control = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      minHeight: 650,
    },

    title: {
      fontWeight: 400,
      marginBottom: theme.spacing.xl * 1.5,
    },

    control: {
      ref: control,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },

    itemOpened: {
      [`& .${control}`]: {
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
      },
    },
  };
});

const placeholder =
  'This is an answer. Automated Query';

export default function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        <Accordion.Item label="How Responsive Are You to Customer Needs?">{placeholder}</Accordion.Item>
        <Accordion.Item label="What Sort of Costs Can I Expect?">{placeholder}</Accordion.Item>
        <Accordion.Item label="Do you store credit card information securely?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="What Makes You Different?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="What Delivery Options and Other Services are Available?">
          {placeholder}
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
