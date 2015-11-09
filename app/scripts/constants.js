'use strict';

/**
 * @ngdoc function
 * @name crnaConstants
 * @description
 * Multiple services with static content (sectors, positions) 
 */

angular.module('4meCdsConstants', [])
.constant('crnaAtomicSectors', [
    'UR', 'XR', 'KR', 'YR', 'HR',
    'UB', 'UN', 'KN', 'HN',
    'KD',
    'UF', 'KF',
    'E', 'UE', 'XE', 'KE', 'HE',
    'SE', 'UH', 'XH', 'KH', 'HH'
])
.constant('crnaSectors',[ 
    { name: 'UXR',    children: ['UR', 'XR'] },
    { name: 'UXKR',   children: ['UXR', 'KR'] },
    { name: 'KHR',    children: ['KR', 'YR', 'HR'] },
    { name: 'HYR',    children: ['YR', 'HR'] },
    { name: '5R',     children: ['UXR', 'KHR'] },
    { name: 'UBN',    children: ['UN', 'UB'] },
    { name: 'UBKN',   children: ['UBN', 'KN'] },
    { name: 'KHN',    children: ['KN', 'HN'] },
    { name: '4N',     children: ['UB', 'UN', 'KN', 'HN'] },
    { name: 'URMN',   children: ['5R', '4N'] },
    { name: '2F',     children: ['KF', 'UF'] },
    { name: 'KD2F',   children: ['KF', 'UF', 'KD'] },
    { name: '4E',     children: ['UXE', 'KHE']},
    { name: '4H',     children: ['UXH', 'KHH']},
    { name: 'UXH',    children: ['UH', 'XH']},
    { name: 'KHH',    children: ['KH', 'HH']},
    { name: 'UXE',    children: ['UE', 'XE']},
    { name: 'KHE',    children: ['KE', 'HE']},
    { name: 'FIR',    children: ['E', 'SE']},
    { name: '5H',     children: ['4H', 'SE']},
    { name: '5E',     children: ['4E', 'E']},
    { name: '5EH',    children: ['5E', '5H']},
    { name: '4EH',    children: ['4E', '4H']},
    { name: 'KDFE',   children: ['5EH', 'KD2F']},
    { name: 'RMS',    children: ['KDFE', 'URMN']}
])
.constant('crnaPositions', [
    '30', '31', '32', '33', // 4R
    '34', '35', '36', '37', // 4N
    '20', '21', '22', '23', // KD + 4H + FIR
    '24', '25', '26', '27', // 4E + 2F
    '11', '12', '13', '14'  // FIR + KF + Nuit
]);