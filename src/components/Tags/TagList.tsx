import { Flex, FlexProps, TagProps, TextProps } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

import { TagItem } from './TagItem';

type TagListProps = {
  tags: Array<{ label: string; minValue: string; maxValue: string }>;
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
  canBeEmpty?: boolean;
  tagItemProps?: TagProps;
  labelProps?: TextProps;
} & FlexProps;

export const TagList = ({
  tags,
  selectedTags,
  setSelectedTags,
  tagItemProps = {},
  labelProps = {},
  ...rest
}: TagListProps): JSX.Element => {
  const handleTagSelection = (minValue: string, maxValue: string) => {
    if (selectedTags.includes(minValue) || selectedTags.includes(maxValue)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== minValue && tag !== maxValue));
    } else {
      setSelectedTags([minValue, maxValue]);
    }
  };

  return (
    <Flex wrap='wrap' gap='1rem' w='100%' {...rest}>
      {tags?.map((tag) => {
        const isSelected =
          selectedTags.includes(tag.minValue) || selectedTags.includes(tag.maxValue);

        return (
          <TagItem
            key={tag.minValue}
            label={tag.label}
            minValue={tag.minValue}
            maxValue={tag.maxValue}
            isSelected={isSelected}
            onTagSelect={handleTagSelection}
            labelProps={labelProps}
            {...tagItemProps}
          />
        );
      })}
    </Flex>
  );
};
