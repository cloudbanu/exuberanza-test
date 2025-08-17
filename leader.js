// Team Leader functionality
function loadTeamLeaderContent(content, user) {
    content.innerHTML = `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-semibold mb-4">Team: ${user.name}</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button onclick="showParticipantRegistration(${user.id})" class="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Register Participants
                    </button>
                    <button onclick="showTeamParticipants(${user.id})" class="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        View Participants
                    </button>
                    <button onclick="showLatestUpdates(${user.id})" class="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 flex items-center justify-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM12 17H7l5 5v-5zM12 7V2l5 5h-5zM7 7V2l-5 5h5z"></path>
                        </svg>
                        Latest Updates
                    </button>
                </div>
            </div>
            <div id="leaderContent">
                <!-- Dynamic content will be loaded here -->
            </div>
        </div>
    `;
    
    showLatestUpdates(user.id); // Show updates by default
}

async function showLatestUpdates(teamId) {
    const content = document.getElementById('leaderContent');
    
    // Get team info and announcements
    const [teamInfo, announcements, competitions, teamParticipants] = await Promise.all([
        supabase.from('teams').select('*').eq('id', teamId).single(),
        supabase.from('announcements').select('*').in('target_role', ['all', 'team_leader']).order('created_at', { ascending: false }).limit(10),
        supabase.from('competitions').select('*, categories(name)').eq('status', 'ongoing').limit(5),
        supabase.from('participants').select('*, categories(name)').eq('team_id', teamId)
    ]);
    
    const settings = await supabase.from('settings').select('*');
    const maxStage = settings.data?.find(s => s.key === 'max_stage_registrations')?.value || '3';
    const maxNonStage = settings.data?.find(s => s.key === 'max_non_stage_registrations')?.value || '5';
    
    content.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow-sm">
                <div class="p-6 border-b">
                    <h3 class="text-lg font-semibold">Team Statistics</h3>
                </div>
                <div class="p-6">
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Total Points:</span>
                            <span class="text-2xl font-bold text-blue-600">${teamInfo.data?.total_points || 0}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Total Participants:</span>
                            <span class="font-semibold">${teamParticipants.data?.length || 0}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Max Stage Registrations:</span>
                            <span class="font-semibold">${maxStage} per participant</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Max Non-Stage Registrations:</span>
                            <span class="font-semibold">${maxNonStage} per participant</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Leader Access:</span>
                            <span class="font-semibold ${teamInfo.data?.leader_access ? 'text-green-600' : 'text-red-600'}">
                                ${teamInfo.data?.leader_access ? 'Enabled' : 'Disabled'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm">
                <div class="p-6 border-b">
                    <h3 class="text-lg font-semibold">Participants by Category</h3>
                </div>
                <div class="p-6">
                    <div class="space-y-3">
                        ${teamParticipants.data?.reduce((acc, participant) => {
                            const categoryName = participant.categories?.name || 'Unknown';
                            acc[categoryName] = (acc[categoryName] || 0) + 1;
                            return acc;
                        }, {}) ? Object.entries(teamParticipants.data?.reduce((acc, participant) => {
                            const categoryName = participant.categories?.name || 'Unknown';
                            acc[categoryName] = (acc[categoryName] || 0) + 1;
                            return acc;
                        }, {})).map(([category, count]) => `
                            <div class="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span class="font-medium">${category}</span>
                                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${count}</span>
                            </div>
                        `).join('') : '<p class="text-gray-500">No participants found</p>'}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div class="bg-white rounded-lg shadow-sm">
                <div class="p-6 border-b">
                    <h3 class="text-lg font-semibold">Latest Announcements</h3>
                </div>
                <div class="max-h-80 overflow-y-auto">
                    ${announcements.data?.map(announcement => `
                        <div class="p-4 border-b last:border-b-0">
                            <div class="font-medium text-gray-900">${announcement.title}</div>
                            ${announcement.content ? `<div class="text-gray-600 text-sm mt-1">${announcement.content}</div>` : ''}
                            <div class="text-xs text-gray-500 mt-2">${new Date(announcement.created_at).toLocaleDateString()}</div>
                        </div>
                    `).join('') || '<div class="p-4 text-gray-500 text-center">No announcements</div>'}
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm">
                <div class="p-6 border-b">
                    <h3 class="text-lg font-semibold">Ongoing Competitions</h3>
                </div>
                <div class="max-h-80 overflow-y-auto">
                    ${competitions.data?.map(competition => `
                        <div class="p-4 border-b last:border-b-0">
                            <div class="font-medium text-gray-900">${competition.name}</div>
                            <div class="text-gray-600 text-sm">${competition.categories?.name}</div>
                            <div class="flex items-center justify-between mt-2">
                                <span class="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">Ongoing</span>
                                ${competition.scheduled_at ? `<span class="text-xs text-gray-500">${new Date(competition.scheduled_at).toLocaleDateString()}</span>` : ''}
                            </div>
                        </div>
                    `).join('') || '<div class="p-4 text-gray-500 text-center">No ongoing competitions</div>'}
                </div>
            </div>
        </div>
    `;
}

async function showParticipantRegistration(teamId) {
    const content = document.getElementById('leaderContent');
    
    const [participants, competitions, registrations] = await Promise.all([
        supabase.from('participants').select('*, categories(name, is_general)').eq('team_id', teamId),
        supabase.from('competitions').select('*, categories(name, is_general)').order('name'),
        supabase.from('participant_competitions').select('*, participants(name), competitions(name, is_stage_item)')
    ]);
    
    content.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Participant Registration</h3>
                <p class="text-gray-600">Register your team participants for competitions</p>
            </div>
            <div class="p-6">
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Select Participant:</label>
                    <select id="selectedParticipant" onchange="loadParticipantCompetitions(${teamId})" class="w-full p-3 border rounded-lg">
                        <option value="">Select Participant</option>
                        ${participants.data?.map(participant => `
                            <option value="${participant.id}" data-stage-reg="${participant.stage_registrations}" data-non-stage-reg="${participant.non_stage_registrations}">
                                ${participant.name} (${participant.categories?.name}) - Stage: ${participant.stage_registrations}/3, Non-Stage: ${participant.non_stage_registrations}/5
                            </option>
                        `).join('') || ''}
                    </select>
                </div>
                
                <div id="participantCompetitionsContent">
                    <div class="text-center py-8 text-gray-500">
                        Select a participant to view available competitions
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm mt-6">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Current Registrations</h3>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competition</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${registrations.data?.filter(reg => participants.data?.some(p => p.id === reg.participant_id)).map(registration => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${registration.participants?.name}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${registration.competitions?.name}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 py-1 text-xs rounded ${registration.competitions?.is_stage_item ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}">
                                        ${registration.competitions?.is_stage_item ? 'Stage' : 'Non-Stage'}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 py-1 text-xs rounded ${registration.is_reported ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}">
                                        ${registration.is_reported ? 'Reported' : 'Registered'}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    ${!registration.is_reported ? `<button onclick="unregisterParticipant(${registration.id}, ${teamId})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Unregister</button>` : '<span class="text-gray-500">Cannot unregister</span>'}
                                </td>
                            </tr>
                        `).join('') || '<tr><td colspan="5" class="text-center py-8 text-gray-500">No registrations found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

async function loadParticipantCompetitions(teamId) {
    const participantSelect = document.getElementById('selectedParticipant');
    const participantId = participantSelect.value;
    
    if (!participantId) return;
    
    const selectedOption = participantSelect.selectedOptions[0];
    const currentStageReg = parseInt(selectedOption.dataset.stageReg);
    const currentNonStageReg = parseInt(selectedOption.dataset.nonStageReg);
    
    const [participant, competitions, existingRegistrations, generalCategories] = await Promise.all([
        supabase.from('participants').select('*, categories(*)').eq('id', participantId).single(),
        supabase.from('competitions').select('*, categories(*)').order('name'),
        supabase.from('participant_competitions').select('competition_id').eq('participant_id', participantId),
        supabase.from('categories').select('*').eq('is_general', true)
    ]);
    
    const registeredCompetitionIds = existingRegistrations.data?.map(reg => reg.competition_id) || [];
    
    // Filter competitions based on participant's category and general categories
    const availableCompetitions = competitions.data?.filter(comp => {
        // Already registered
        if (registeredCompetitionIds.includes(comp.id)) return false;
        
        // Check if competition is in participant's category or general category
        const isInParticipantCategory = comp.category_id === participant.data?.category_id;
        const isInGeneralCategory = generalCategories.data?.some(gc => gc.id === comp.category_id);
        
        if (!isInParticipantCategory && !isInGeneralCategory) return false;
        
        // Check registration limits
        if (comp.is_stage_item && currentStageReg >= 3) return false;
        if (!comp.is_stage_item && currentNonStageReg >= 5) return false;
        
        return true;
    }) || [];
    
    document.getElementById('participantCompetitionsContent').innerHTML = `
        <div class="mb-4">
            <h4 class="font-medium text-gray-900 mb-2">Available Competitions for ${participant.data?.name}</h4>
            <p class="text-sm text-gray-600">
                Current registrations: Stage ${currentStageReg}/3, Non-Stage ${currentNonStageReg}/5
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${availableCompetitions.map(competition => `
                <div class="border rounded-lg p-4 hover:bg-gray-50">
                    <div class="font-medium text-gray-900">${competition.name}</div>
                    <div class="text-sm text-gray-600">${competition.categories?.name}</div>
                    <div class="flex items-center justify-between mt-3">
                        <div class="space-x-1">
                            <span class="px-2 py-1 text-xs rounded ${competition.is_group_item ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}">
                                ${competition.is_group_item ? 'Group' : 'Individual'}
                            </span>
                            <span class="px-2 py-1 text-xs rounded ${competition.is_stage_item ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}">
                                ${competition.is_stage_item ? 'Stage' : 'Non-Stage'}
                            </span>
                        </div>
                        <button onclick="registerParticipant(${participantId}, ${competition.id}, ${teamId})" class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                            Register
                        </button>
                    </div>
                    ${competition.team_participant_limit > 1 ? `<div class="text-xs text-gray-500 mt-1">Team limit: ${competition.team_participant_limit}</div>` : ''}
                </div>
            `).join('') || '<div class="text-center py-8 text-gray-500">No available competitions</div>'}
        </div>
    `;
}

async function registerParticipant(participantId, competitionId, teamId) {
    // Check team participant limit for this competition
    const competition = await supabase
        .from('competitions')
        .select('*')
        .eq('id', competitionId)
        .single();
    
    if (competition.data?.team_participant_limit > 1) {
        const existingTeamRegistrations = await supabase
            .from('participant_competitions')
            .select('*, participants!inner(*)')
            .eq('competition_id', competitionId)
            .eq('participants.team_id', teamId);
        
        if (existingTeamRegistrations.data?.length >= competition.data.team_participant_limit) {
            showNotification(`Team limit reached for this competition (${competition.data.team_participant_limit})`, 'error');
            return;
        }
    }
    
    const { data, error } = await supabase
        .from('participant_competitions')
        .insert({ participant_id: participantId, competition_id: competitionId });
    
    if (error) {
        showNotification('Failed to register participant', 'error');
        return;
    }
    
    // Update participant registration count
    const comp = await supabase.from('competitions').select('is_stage_item').eq('id', competitionId).single();
    const field = comp.data?.is_stage_item ? 'stage_registrations' : 'non_stage_registrations';
    
    await supabase.rpc('increment_registration_count', {
        participant_id: participantId,
        field_name: field
    });
    
    showNotification('Participant registered successfully');
    showParticipantRegistration(teamId);
}

async function unregisterParticipant(registrationId, teamId) {
    if (!confirm('Are you sure you want to unregister this participant?')) {
        return;
    }
    
    // Get registration details first
    const registration = await supabase
        .from('participant_competitions')
        .select('*, competitions(is_stage_item)')
        .eq('id', registrationId)
        .single();
    
    const { error } = await supabase
        .from('participant_competitions')
        .delete()
        .eq('id', registrationId);
    
    if (error) {
        showNotification('Failed to unregister participant', 'error');
        return;
    }
    
    // Update participant registration count
    const field = registration.data?.competitions?.is_stage_item ? 'stage_registrations' : 'non_stage_registrations';
    await supabase.rpc('decrement_registration_count', {
        participant_id: registration.data?.participant_id,
        field_name: field
    });
    
    showNotification('Participant unregistered successfully');
    showParticipantRegistration(teamId);
}

async function showTeamParticipants(teamId) {
    const content = document.getElementById('leaderContent');
    
    const participants = await supabase
        .from('participants')
        .select('*, categories(name), participant_competitions(*, competitions(name, is_stage_item))')
        .eq('team_id', teamId)
        .order('name');
    
    content.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Team Participants</h3>
                <p class="text-gray-600">View all participants and their registrations</p>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest No.</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage Reg.</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Non-Stage Reg.</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Competitions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${participants.data?.map(participant => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-medium text-gray-900">${participant.name}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.categories?.name}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.chest_number || 'N/A'}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.stage_registrations}/3</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.non_stage_registrations}/5</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.participant_competitions?.length || 0}</td>
                            </tr>
                            ${participant.participant_competitions?.length > 0 ? `
                                <tr class="bg-gray-50">
                                    <td colspan="6" class="px-6 py-2">
                                        <div class="text-xs text-gray-600">
                                            <strong>Registered Competitions:</strong>
                                            ${participant.participant_competitions.map(reg => `
                                                <span class="inline-block mr-2 mt-1 px-2 py-1 rounded ${reg.competitions?.is_stage_item ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}">
                                                    ${reg.competitions?.name}
                                                </span>
                                            `).join('')}
                                        </div>
                                    </td>
                                </tr>
                            ` : ''}
                        `).join('') || '<tr><td colspan="6" class="text-center py-8 text-gray-500">No participants found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
