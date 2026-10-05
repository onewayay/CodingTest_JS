function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let onBridge = Array(bridge_length).fill(0);
    let onBridgeTrucksWeights = 0;

    while(truck_weights.length > 0){
        time++
        let passTruckWeight = onBridge.shift();
        onBridgeTrucksWeights -= passTruckWeight;

        if (onBridgeTrucksWeights + truck_weights[0] <= weight) {
          const truck = truck_weights.shift();
          onBridge.push(truck);
          onBridgeTrucksWeights += truck;
        } else {
          onBridge.push(0);
        }
    }
    
    return time + bridge_length;
}