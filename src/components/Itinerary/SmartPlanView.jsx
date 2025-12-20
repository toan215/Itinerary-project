import React from "react";
import {
    Box,
    Text,
    Paper,
    Group,
    Stack,
    Badge,
    ThemeIcon,
    Timeline,
    Button,
    ActionIcon,
    ScrollArea,
    Tooltip,
    Flex,
} from "@mantine/core";
import {
    IconClock,
    IconBulb,
    IconShare,
    IconChevronRight,
    IconBrandTiktok,
    IconBrandFacebook,
    IconBrandReddit,
} from "@tabler/icons-react";

/**
 * SmartPlanView Component
 * Displays a detailed AI-generated itinerary with social research and optimal timing
 */
const SmartPlanView = ({ plan }) => {
    if (!plan) return null;

    return (
        <Box h="100%" display="flex" style={{ flexDirection: "column" }}>
            {/* Header */}
            <Box p="md" bg="dark.7" c="white" style={{ borderBottom: "1px solid var(--mantine-color-dark-4)" }}>
                <Stack gap={4}>
                    <Text fw={700} size="lg">AI Smart Plan ✨</Text>
                    <Text size="xs" opacity={0.7} lineClamp={2}>{plan.summary}</Text>
                </Stack>
            </Box>

            {/* Days Scroll Area */}
            <ScrollArea flex={1} p="md">
                <Stack gap="xl">
                    {plan.days?.map((day, dIdx) => (
                        <Box key={dIdx}>
                            <Group justify="space-between" mb="md">
                                <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} size="lg">
                                    Day {day.day_index}
                                </Badge>
                                <Text size="xs" c="dimmed">
                                    {day.day_distance_km} km • {day.places?.length || 0} places
                                </Text>
                            </Group>

                            <Timeline active={day.places?.length || 0} bulletSize={30} lineWidth={2}>
                                {day.places?.map((place, pIdx) => (
                                    <Timeline.Item
                                        key={pIdx}
                                        bullet={
                                            <ThemeIcon size={26} radius="xl" color="indigo" variant="light">
                                                <Text size="xs" fw={700}>{place.order}</Text>
                                            </ThemeIcon>
                                        }
                                    >
                                        <Paper shadow="xs" p="md" withBorder radius="md" bg="white">
                                            <Stack gap="sm">
                                                <Group justify="space-between" align="flex-start" wrap="nowrap">
                                                    <Stack gap={2} style={{ flex: 1 }}>
                                                        <Text fw={700} size="md" lineClamp={1}>{place.name}</Text>
                                                        <Group gap={4}>
                                                            <IconClock size={12} color="var(--mantine-color-dimmed)" />
                                                            <Text size="xs" c="dimmed">{place.recommended_time} ({place.suggested_duration_min} min)</Text>
                                                        </Group>
                                                    </Stack>
                                                    <Button
                                                        variant="subtle"
                                                        size="compact-xs"
                                                        rightSection={<IconChevronRight size={14} />}
                                                    >
                                                        Details
                                                    </Button>
                                                </Group>

                                                {/* Tips */}
                                                {place.tips && place.tips.length > 0 && (
                                                    <Box bg="blue.0" p="xs" style={{ borderRadius: '6px', borderLeft: '4px solid var(--mantine-color-blue-5)' }}>
                                                        <Group gap={6} mb={4}>
                                                            <IconBulb size={14} color="var(--mantine-color-blue-6)" />
                                                            <Text size="xs" fw={700} c="blue.8">Local Tip</Text>
                                                        </Group>
                                                        {place.tips.map((tip, i) => (
                                                            <Text key={i} size="xs" c="blue.9" mb={2}>• {tip}</Text>
                                                        ))}
                                                    </Box>
                                                )}

                                                {/* Highlights (Social Research) */}
                                                {place.highlights && (
                                                    <Stack gap={4}>
                                                        <Group gap={6}>
                                                            <IconShare size={14} color="var(--mantine-color-indigo-6)" />
                                                            <Text size="xs" fw={700} c="indigo.8">Social Buzz</Text>
                                                        </Group>
                                                        <Text size="xs" italic c="gray.7">
                                                            {place.highlights}
                                                        </Text>
                                                        {place.social_mentions?.length > 0 && (
                                                            <Group gap={4} mt={4}>
                                                                {place.social_mentions.map((mention, i) => (
                                                                    <Tooltip key={i} label={mention}>
                                                                        <ActionIcon size="sm" variant="light" color="indigo" radius="xl">
                                                                            {mention.toLowerCase().includes('tiktok') ? <IconBrandTiktok size={14} /> :
                                                                                mention.toLowerCase().includes('facebook') ? <IconBrandFacebook size={14} /> :
                                                                                    <IconBrandReddit size={14} />}
                                                                        </ActionIcon>
                                                                    </Tooltip>
                                                                ))}
                                                            </Group>
                                                        )}
                                                    </Stack>
                                                )}
                                            </Stack>
                                        </Paper>
                                    </Timeline.Item>
                                ))}
                            </Timeline>
                        </Box>
                    ))}
                </Stack>
            </ScrollArea>
        </Box>
    );
};

export default SmartPlanView;
