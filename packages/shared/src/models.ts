import { CustomModelConfig, ModelConfigurationParams } from "./types.js";

const MODEL_CONFIGS: ModelConfigurationParams[] = [
  {
    name: "gpt-4.1",
    label: "GPT 4.1",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 32_768,
        default: 4_096,
        current: 4_096,
      },
    },
  },
  {
    name: "gpt-4.1-mini",
    label: "GPT 4.1 mini",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 32_768,
        default: 4_096,
        current: 4_096,
      },
    },
  },
  {
    name: "o4-mini",
    label: "o4 mini",
    config: {
      provider: "openai",
      temperatureRange: null,
      maxTokens: {
        min: 1,
        max: 100_000,
        default: 4_096,
        current: 4_096,
      },
      reasoning_effort: "high",
    },
  },
  {
    name: "gpt-4o",
    label: "GPT 4o",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 16_384,
        default: 4_096,
        current: 4_096,
      },
    },
  },
  {
    name: "gpt-4o-mini",
    label: "GPT 4o mini",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 16_384,
        default: 4_096,
        current: 4_096,
      },
    },
  },
  {
    name: "gpt-4.5-preview",
    label: "GPT 4.5",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 16_384,
        default: 4_096,
        current: 4_096,
      },
    },
  },
  {
    name: "o3-mini",
    label: "o3 mini",
    config: {
      provider: "openai",
      temperatureRange: null,
      maxTokens: {
        min: 1,
        max: 100_000,
        default: 4_096,
        current: 4_096,
      },
      reasoning_effort: "high",
    },
  },
  {
    name: "o1-mini",
    label: "o1 mini",
    config: {
      provider: "openai",
      temperatureRange: null,
      maxTokens: {
        min: 1,
        max: 65_536,
        default: 4_096,
        current: 4_096,
      },
      reasoning_effort: "high",
    },
  },
  {
    name: "o1",
    label: "o1",
    config: {
      provider: "openai",
      temperatureRange: null,
      maxTokens: {
        min: 1,
        max: 100_000,
        default: 4_096,
        current: 4_096,
      },
      reasoning_effort: "high",
    },
  },
];




export const ALL_MODELS: ModelConfigurationParams[] = [
  ...MODEL_CONFIGS,
];

type MODEL_NAMES = (typeof MODEL_CONFIGS)[number]["name"];
export type ALL_MODEL_NAMES = MODEL_NAMES;

export const DEFAULT_MODEL_NAME: ALL_MODEL_NAMES = MODEL_CONFIGS[1].name;
export const DEFAULT_MODEL_CONFIG: CustomModelConfig = {
  ...MODEL_CONFIGS[1].config,
  temperatureRange: MODEL_CONFIGS[1].config.temperatureRange ? { ...MODEL_CONFIGS[1].config.temperatureRange } : undefined,
  maxTokens: { ...MODEL_CONFIGS[1].config.maxTokens },
};
