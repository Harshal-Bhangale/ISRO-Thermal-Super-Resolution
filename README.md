# Optical-Guided Super-Resolution for Thermal IR Imagery

Smart India Hackathon 2025 submission for Problem Statement SIH25171.

Team: Synaptic-Surge  
Theme: Space Technology  
Category: Software

## Overview

This project improves low-resolution Thermal Infrared (TIR) satellite imagery using optical guidance, AI-based fusion, and physics-aware constraints. The goal is to generate sharper thermal maps while preserving temperature fidelity for real-world decision making.

The system targets use cases such as:

- Precision agriculture (crop stress, irrigation planning)
- Urban heat island monitoring
- Disaster risk management (hotspots, early alerts)
- Water and environmental monitoring

## Problem Statement

Thermal bands usually have lower spatial resolution than optical bands. Direct upscaling can introduce artifacts and distort true temperature values.

Key challenges:

- Multi-sensor misalignment between optical and thermal inputs
- Thermal fidelity loss during super-resolution
- Large-scale compute and data throughput bottlenecks
- Need for robust deployment across agencies and platforms

## Proposed Solution

An AI-driven adaptive thermal super-resolution pipeline that combines:

- Precise optical-thermal co-registration
- Edge-aware 2x and 4x thermal upsampling
- Selective feature fusion from optical bands into thermal reconstruction
- Physics-based constraints (emissivity, radiative behavior, energy consistency)

Expected output:

- High-resolution thermal map
- Improved edge clarity with physically consistent temperature transitions
- Optional uncertainty layer for confidence-aware analysis

## High-Level Pipeline

1. Data acquisition (GeoTIFF multispectral and thermal inputs)
2. Preprocessing and calibration
3. Cloud/shadow masking and patch preparation
4. Core ML processing
5. Post-processing and validation
6. Packaging and deployment (GeoTIFF + APIs)
7. Continuous learning and retraining loop

## Architecture Summary

### A) Multi-Sensor Alignment

- Goal: pixel-level co-registration of optical and thermal sources
- Methods: metadata-assisted alignment, feature matching (for example SIFT/ORB), geometric correction

### B) Feature Extraction

- Optical context features (including land-cover cues)
- Thermal texture and temperature-gradient features
- Lightweight deep models for spatial encoding

### C) Fusion and Super-Resolution

- Attention-guided fusion of optical and thermal features
- AI upsampling at 2x or 4x
- Physics-aware loss terms for realistic thermal outputs

## Evaluation Metrics

Model quality is evaluated using:

- PSNR
- SSIM
- RMSE (temperature-domain error)
- Correlation coefficient (r2)
- Edge and alignment consistency checks

## Current Project Status

- Data preprocessing pipeline: in progress and partially implemented
- Dashboard/frontend prototype: available
- Full model training and validation: planned next phase

## Repository Structure

Core app files:

- src/pages: Dashboard, Upload, Processing, Analytics, Reports
- src/components: reusable UI modules
- src/assets: imagery used in prototype and demo
- public: static files

Related submission material:

- SYNAPTIC-SURGE-SIH25171-SUBMISSION PPT.pdf

## Tech Stack (Current Prototype)

- Frontend: React + TypeScript + Vite
- Styling/UI: Tailwind CSS + component library
- Routing: React Router
- Data layer utilities: TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Future Work

- Complete full training pipeline for optical-guided thermal SR
- Add uncertainty-aware inference for operational reliability
- Integrate with WebGIS workflows for agency-level monitoring
- Optimize large-area inference with scalable cloud/HPC processing

## References

This solution direction is based on guided thermal super-resolution research, multimodal fusion methods, and physics-aware remote-sensing constraints as summarized in the SIH submission deck.

## Acknowledgment

Prepared as part of Smart India Hackathon 2025 for ISRO problem SIH25171.

