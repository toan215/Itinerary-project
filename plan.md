# Plan Update: "Get Plan" Functionality

## Backend Endpoint
Using `POST /itineraries/{itinerary_id}/get-plan` as defined in `API_backend.md`.

## Frontend Updates
1. **API**: Add `getPlan` to `itineraryService.js` or `aiService.js`.
2. **Store**: Add `smartPlan` state and `fetchSmartPlan` action to `useItineraryStore.js`.
3. **UI**:
   - Add "Get Plan" button in `AiItinerary.jsx`.
   - Create `SmartPlanView.jsx` to render the detailed AI plan.
   - Show social research highlights and optimal timing for each place.
   - Implement "View Detail" for places to show aggregated interesting info (e.g., Cho Han food recommendations).

## Format
The plan will follow the `SmartPlan` interface defined in `API_backend.md`, including `recommended_time`, `tips`, and `highlights`.
