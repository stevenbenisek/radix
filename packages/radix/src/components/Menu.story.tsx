import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Grid } from './Grid';
import { Menu, MenuGroup, MenuItem } from './Menu';
import { CircleIcon } from '@modulz/radix-icons';
import { Heading } from './Heading';
import { Text } from './Text';
import { Flex } from './Flex';
import { Hover } from './Hover';

function MenuStory() {
  const menuItemRef = useRef(null);

  function handleClick(e: React.MouseEvent) {
    console.log(menuItemRef.current);
  }

  return (
    <Grid
      gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gridGap={4}
    >
      <Box mb="4">
        <Heading size={0} bold>
          Default
        </Heading>
        <Menu>
          <MenuItem ref={menuItemRef} onClick={handleClick}>
            <Text size={2}>Item one</Text>
          </MenuItem>
          <MenuItem ref={menuItemRef} onClick={handleClick} disabled>
            <Text size={2} color="inherit">
              Item two
            </Text>
          </MenuItem>
          <MenuItem>
            <Text size={2}>Item three</Text>
          </MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Menu with content on hover
        </Heading>
        <Menu>
          <Hover>
            {isHovered => (
              <MenuItem>
                <Text size={2}>Wrapped in `Hover`</Text>
                {isHovered && (
                  <Box position="absolute" right={0} mr={3}>
                    <CircleIcon />
                  </Box>
                )}
              </MenuItem>
            )}
          </Hover>
          <Hover>
            {isHovered => (
              <MenuItem variant="active">
                <Text size={2} color="white">
                  Wrapped in `Hover`
                </Text>
                {isHovered && (
                  <Box position="absolute" right={0} mr={3}>
                    <CircleIcon />
                  </Box>
                )}
              </MenuItem>
            )}
          </Hover>
          <Hover>
            {isHovered => (
              <MenuItem disabled>
                <Text size={2} color="inherit">
                  Wrapped in `Hover`
                </Text>
                {isHovered && (
                  <Box position="absolute" right={0} mr={3}>
                    <CircleIcon />
                  </Box>
                )}
              </MenuItem>
            )}
          </Hover>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Menu with icon
        </Heading>
        <Menu>
          <MenuItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item one</Text>
          </MenuItem>
          <MenuItem variant="active">
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2} color="white">
              Item two
            </Text>
          </MenuItem>
          <MenuItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item three</Text>
          </MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Menu with group
        </Heading>
        <Menu>
          <MenuItem>
            <Text size={2}>Item one</Text>
          </MenuItem>
          <MenuGroup>
            <MenuItem>
              <Text size={2}>Item two</Text>
            </MenuItem>
            <MenuItem>
              <Text size={2}>Item three</Text>
            </MenuItem>
          </MenuGroup>
          <MenuItem>
            <Text size={2}>Item four</Text>
          </MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Menu with variants
        </Heading>
        <Menu>
          <MenuItem>
            <Text size={2}>Default</Text>
          </MenuItem>
          <MenuItem variant="selected">
            <Text size={2}>Selected</Text>
          </MenuItem>
          <MenuItem variant="active">
            <Text size={2} color="white">
              Active
            </Text>
          </MenuItem>
          <MenuItem disabled>
            <Text size={2} color="inherit">
              Disabled
            </Text>
          </MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold mb={1}>
          Menu with shadow variant
        </Heading>
        <Menu variant="shadow">
          <MenuItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item one</Text>
          </MenuItem>
          <MenuItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item two</Text>
          </MenuItem>
          <MenuItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item three</Text>
          </MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Custom
        </Heading>
        <Menu>
          <MenuItem>
            <Box>
              <Heading size={0} bold mb={1}>
                Heading
              </Heading>
              <Text as="div" size={1} color="grays.5">
                Some text
              </Text>
            </Box>
          </MenuItem>
          <MenuItem>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Text as="div" size={3}>
                Device
              </Text>

              <Text as="div" size={1} color="grays.5">
                200 x 400
              </Text>
            </Flex>
          </MenuItem>
        </Menu>
      </Box>
    </Grid>
  );
}

storiesOf('Components|Menu', module).add('default', () => <MenuStory />);
