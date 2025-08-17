// Admin functionality - Updated with sidebar and new requirements
function loadAdminContent(content) {
    content.innerHTML = `
        <div class="flex min-h-screen bg-gray-100">
            <!-- Sidebar -->
            <div class="w-64 bg-white shadow-lg">
                <div class="p-6 border-b">
                    <h2 class="text-xl font-semibold text-gray-800">Admin Panel</h2>
                </div>
                <nav class="mt-6">
                    <div class="space-y-2">
                        <button onclick="showDashboard()" class="admin-nav-btn active" id="nav-dashboard">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            Dashboard
                        </button>
                        <button onclick="showTeamsManagement()" class="admin-nav-btn" id="nav-teams">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            Teams
                        </button>
                        <button onclick="showCategoriesManagement()" class="admin-nav-btn" id="nav-categories">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            </svg>
                            Categories
                        </button>
                        <button onclick="showParticipantsManagement()" class="admin-nav-btn" id="nav-participants">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            Participants
                        </button>
                        <button onclick="showCompetitionsManagement()" class="admin-nav-btn" id="nav-competitions">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                            Competitions
                        </button>
                        <button onclick="showInvigilatorsManagement()" class="admin-nav-btn" id="nav-invigilators">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            Invigilators
                        </button>
                        <button onclick="showJudgesManagement()" class="admin-nav-btn" id="nav-judges">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Judges
                        </button>
                        <button onclick="showResults()" class="admin-nav-btn" id="nav-results">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            Results
                        </button>
                        <button onclick="showSchedule()" class="admin-nav-btn" id="nav-schedule">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Schedule
                        </button>
                        <button onclick="showSettings()" class="admin-nav-btn" id="nav-settings">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Settings
                        </button>
                    </div>
                </nav>
            </div>

            <!-- Main Content -->
            <div class="flex-1 p-6">
                <div id="adminMainContent">
                    <!-- Content will be loaded here -->
                </div>
            </div>
        </div>
    `;

    // Add CSS for navigation
    const style = document.createElement('style');
    style.textContent = `
        .admin-nav-btn {
            width: 100%;
            text-left: true;
            padding: 12px 24px;
            margin: 2px 0;
            color: #6B7280;
            hover:bg-gray-100;
            hover:text-gray-900;
            border-radius: 6px;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .admin-nav-btn:hover {
            background-color: #F3F4F6;
            color: #1F2937;
        }
        .admin-nav-btn.active {
            background-color: #3B82F6;
            color: white;
        }
    `;
    document.head.appendChild(style);
    
    showDashboard(); // Show dashboard by default
}

function setActiveNav(navId) {
    document.querySelectorAll('.admin-nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(navId).classList.add('active');
}

async function showDashboard() {
    setActiveNav('nav-dashboard');
    const content = document.getElementById('adminMainContent');
    
    // Fetch dashboard statistics
    const [competitions, results, teams, participants] = await Promise.all([
        supabase.from('competitions').select('*'),
        supabase.from('results').select('*'),
        supabase.from('teams').select('*'),
        supabase.from('participants').select('*')
    ]);
    
    const totalCompetitions = competitions.data?.length || 0;
    const completedCompetitions = competitions.data?.filter(c => c.status === 'completed').length || 0;
    const pendingResults = results.data?.filter(r => r.status === 'pending').length || 0;
    const publishedResults = results.data?.filter(r => r.status === 'published').length || 0;
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p class="text-gray-600">Overview of arts festival management</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="flex items-center">
                    <div class="bg-blue-100 p-3 rounded-lg">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-2xl font-bold text-gray-800">${totalCompetitions}</p>
                        <p class="text-gray-600 text-sm">Total Competitions</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="flex items-center">
                    <div class="bg-green-100 p-3 rounded-lg">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-2xl font-bold text-gray-800">${completedCompetitions}</p>
                        <p class="text-gray-600 text-sm">Completed</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="flex items-center">
                    <div class="bg-yellow-100 p-3 rounded-lg">
                        <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-2xl font-bold text-gray-800">${pendingResults}</p>
                        <p class="text-gray-600 text-sm">Pending Results</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <div class="flex items-center">
                    <div class="bg-purple-100 p-3 rounded-lg">
                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-2xl font-bold text-gray-800">${publishedResults}</p>
                        <p class="text-gray-600 text-sm">Published Results</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-4">Team Points Status</h3>
                <div class="space-y-2 max-h-80 overflow-y-auto">
                    ${teams.data?.sort((a, b) => b.total_points - a.total_points).map((team, index) => `
                        <div class="flex justify-between items-center p-2 rounded ${index === 0 ? 'bg-yellow-50' : index === 1 ? 'bg-gray-50' : index === 2 ? 'bg-orange-50' : ''}">
                            <span class="font-medium">${index + 1}. ${team.name}</span>
                            <span class="font-bold text-blue-600">${team.total_points} pts</span>
                        </div>
                    `).join('') || '<p class="text-gray-500">No teams found</p>'}
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold mb-4">System Statistics</h3>
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Total Teams:</span>
                        <span class="font-semibold">${teams.data?.length || 0}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Total Participants:</span>
                        <span class="font-semibold">${participants.data?.length || 0}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">Teams with Leader Access:</span>
                        <span class="font-semibold">${teams.data?.filter(t => t.leader_access).length || 0}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">System Status:</span>
                        <span class="font-semibold text-green-600">Active</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

async function showTeamsManagement() {
    setActiveNav('nav-teams');
    const content = document.getElementById('adminMainContent');
    const { data: teams, error } = await supabase.from('teams').select('*').order('created_at', { ascending: false });
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Teams Management</h1>
            <p class="text-gray-600">Create and manage teams</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Create Team</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input type="text" id="teamName" placeholder="Team Name" class="p-3 border rounded-lg">
                <input type="password" id="teamPassword" placeholder="Team Password" class="p-3 border rounded-lg">
                <button onclick="createTeam()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Create Team</button>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Teams (${teams?.length || 0})</h3>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leader Access</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${teams?.map(team => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <input type="text" id="teamName_${team.id}" value="${team.name}" class="border rounded px-2 py-1 mr-2">
                                        <button onclick="updateTeamName(${team.id})" class="text-blue-600 hover:text-blue-800 text-sm">Update</button>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${team.total_points}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 py-1 text-xs rounded ${team.leader_access ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                                        ${team.leader_access ? 'Enabled' : 'Disabled'}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                    <button onclick="toggleLeaderAccess(${team.id}, ${!team.leader_access})" 
                                            class="px-3 py-1 rounded text-sm ${team.leader_access ? 'bg-red-100 text-red-800 hover:bg-red-200' : 'bg-green-100 text-green-800 hover:bg-green-200'}">
                                        ${team.leader_access ? 'Disable Access' : 'Enable Access'}
                                    </button>
                                    <button onclick="deleteTeam(${team.id})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        `).join('') || '<tr><td colspan="4" class="text-center py-8 text-gray-500">No teams found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

async function updateTeamName(teamId) {
    const newName = document.getElementById(`teamName_${teamId}`).value.trim();
    if (!newName) {
        showNotification('Team name cannot be empty', 'error');
        return;
    }
    
    const { error } = await supabase
        .from('teams')
        .update({ name: newName })
        .eq('id', teamId);
    
    if (error) {
        showNotification('Failed to update team name', 'error');
        return;
    }
    
    showNotification('Team name updated successfully');
}

async function createTeam() {
    const name = document.getElementById('teamName').value.trim();
    const password = document.getElementById('teamPassword').value.trim();
    
    if (!name || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    const { data, error } = await supabase
        .from('teams')
        .insert({ name, password });
    
    if (error) {
        showNotification('Failed to create team', 'error');
        return;
    }
    
    showNotification('Team created successfully');
    document.getElementById('teamName').value = '';
    document.getElementById('teamPassword').value = '';
    showTeamsManagement();
}

async function toggleLeaderAccess(teamId, access) {
    const { error } = await supabase
        .from('teams')
        .update({ leader_access: access })
        .eq('id', teamId);
    
    if (error) {
        showNotification('Failed to update team access', 'error');
        return;
    }
    
    showNotification('Team access updated');
    showTeamsManagement();
}

async function deleteTeam(teamId) {
    if (!confirm('Are you sure you want to delete this team? This will also delete all associated participants.')) {
        return;
    }
    
    const { error } = await supabase
        .from('teams')
        .delete()
        .eq('id', teamId);
    
    if (error) {
        showNotification('Failed to delete team', 'error');
        return;
    }
    
    showNotification('Team deleted successfully');
    showTeamsManagement();
}

async function showCategoriesManagement() {
    setActiveNav('nav-categories');
    const content = document.getElementById('adminMainContent');
    const { data: categories, error } = await supabase.from('categories').select('*').order('created_at', { ascending: false });
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Categories Management</h1>
            <p class="text-gray-600">Create and manage competition categories</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Create Category</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" id="categoryName" placeholder="Category Name" class="p-3 border rounded-lg">
                <div class="flex items-center">
                    <label class="flex items-center">
                        <input type="checkbox" id="isGeneral" class="mr-2">
                        <span class="text-sm">General Category</span>
                    </label>
                </div>
                <button onclick="createCategory()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Create Category</button>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Categories (${categories?.length || 0})</h3>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${categories?.map(category => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${category.name}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 py-1 text-xs rounded ${category.is_general ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}">
                                        ${category.is_general ? 'General' : 'Regular'}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onclick="deleteCategory(${category.id})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        `).join('') || '<tr><td colspan="3" class="text-center py-8 text-gray-500">No categories found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

async function createCategory() {
    const name = document.getElementById('categoryName').value.trim();
    const isGeneral = document.getElementById('isGeneral').checked;
    
    if (!name) {
        showNotification('Please enter category name', 'error');
        return;
    }
    
    const { data, error } = await supabase
        .from('categories')
        .insert({ name, is_general: isGeneral });
    
    if (error) {
        showNotification('Failed to create category', 'error');
        return;
    }
    
    showNotification('Category created successfully');
    document.getElementById('categoryName').value = '';
    document.getElementById('isGeneral').checked = false;
    showCategoriesManagement();
}

async function deleteCategory(categoryId) {
    if (!confirm('Are you sure you want to delete this category?')) {
        return;
    }
    
    const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', categoryId);
    
    if (error) {
        showNotification('Failed to delete category', 'error');
        return;
    }
    
    showNotification('Category deleted successfully');
    showCategoriesManagement();
}

async function showParticipantsManagement() {
    setActiveNav('nav-participants');
    const content = document.getElementById('adminMainContent');
    
    const [categories, teams] = await Promise.all([
        supabase.from('categories').select('*').eq('is_general', false),
        supabase.from('teams').select('*').order('id')
    ]);
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Participants Management</h1>
            <p class="text-gray-600">Manage participants by category</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Select Category</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select id="selectedCategory" onchange="loadCategoryParticipants()" class="p-3 border rounded-lg">
                    <option value="">Select Category</option>
                    ${categories.data?.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('') || ''}
                </select>
            </div>
        </div>

        <div id="participantsContent">
            <div class="text-center py-8 text-gray-500">
                Select a category to view and manage participants
            </div>
        </div>
    `;
}

async function loadCategoryParticipants() {
    const categoryId = document.getElementById('selectedCategory').value;
    if (!categoryId) return;
    
    const [participants, teams, category] = await Promise.all([
        supabase.from('participants').select('*, teams(name)').eq('category_id', categoryId).order('chest_number'),
        supabase.from('teams').select('*').order('id'),
        supabase.from('categories').select('*').eq('id', categoryId).single()
    ]);
    
    document.getElementById('participantsContent').innerHTML = `
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Add Participant to ${category.data?.name}</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" id="participantName" placeholder="Participant Name" class="p-3 border rounded-lg">
                <select id="participantTeam" class="p-3 border rounded-lg">
                    <option value="">Select Team</option>
                    ${teams.data?.map(team => `<option value="${team.id}">${team.name}</option>`).join('') || ''}
                </select>
                <button onclick="addParticipant(${categoryId})" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Add Participant</button>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Participants in ${category.data?.name} (${participants.data?.length || 0})</h3>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest No.</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage Registrations</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Non-Stage Registrations</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${participants.data?.map(participant => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${participant.name}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.teams?.name || 'N/A'}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.chest_number || 'N/A'}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.stage_registrations}/3</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${participant.non_stage_registrations}/5</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onclick="deleteParticipant(${participant.id}, ${categoryId})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        `).join('') || '<tr><td colspan="6" class="text-center py-8 text-gray-500">No participants found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

async function addParticipant(categoryId) {
    const name = document.getElementById('participantName').value.trim();
    const teamId = document.getElementById('participantTeam').value;
    
    if (!name || !teamId) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Generate chest number
    const team = await supabase.from('teams').select('id').eq('id', teamId).single();
    const teamIndex = parseInt(teamId);
    const existingParticipants = await supabase.from('participants').select('chest_number').like('chest_number', `${teamIndex}%`);
    const chestNumber = `${teamIndex}${String(existingParticipants.data?.length + 1).padStart(2, '0')}`;
    
    const { data, error } = await supabase
        .from('participants')
        .insert({ 
            name, 
            team_id: parseInt(teamId), 
            category_id: parseInt(categoryId),
            chest_number: chestNumber
        });
    
    if (error) {
        showNotification('Failed to add participant', 'error');
        return;
    }
    
    showNotification('Participant added successfully');
    document.getElementById('participantName').value = '';
    document.getElementById('participantTeam').value = '';
    loadCategoryParticipants();
}

async function deleteParticipant(participantId, categoryId) {
    if (!confirm('Are you sure you want to delete this participant?')) {
        return;
    }
    
    const { error } = await supabase
        .from('participants')
        .delete()
        .eq('id', participantId);
    
    if (error) {
        showNotification('Failed to delete participant', 'error');
        return;
    }
    
    showNotification('Participant deleted successfully');
    loadCategoryParticipants();
}

async function showCompetitionsManagement() {
    setActiveNav('nav-competitions');
    const content = document.getElementById('adminMainContent');
    
    const { data: categories } = await supabase.from('categories').select('*');
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Competitions Management</h1>
            <p class="text-gray-600">Manage competitions by category</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Select Category</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select id="selectedCompetitionCategory" onchange="loadCategoryCompetitions()" class="p-3 border rounded-lg">
                    <option value="">Select Category</option>
                    ${categories?.map(cat => `<option value="${cat.id}">${cat.name} ${cat.is_general ? '(General)' : ''}</option>`).join('') || ''}
                </select>
            </div>
        </div>

        <div id="competitionsContent">
            <div class="text-center py-8 text-gray-500">
                Select a category to view and manage competitions
            </div>
        </div>
    `;
}

async function loadCategoryCompetitions() {
    const categoryId = document.getElementById('selectedCompetitionCategory').value;
    if (!categoryId) return;
    
    const [competitions, category] = await Promise.all([
        supabase.from('competitions').select('*, categories(name)').eq('category_id', categoryId).order('created_at', { ascending: false }),
        supabase.from('categories').select('*').eq('id', categoryId).single()
    ]);
    
    document.getElementById('competitionsContent').innerHTML = `
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Add Competition to ${category.data?.name}</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input type="text" id="competitionName" placeholder="Competition Name" class="p-3 border rounded-lg">
                <div class="flex items-center space-x-4">
                    <label class="flex items-center">
                        <input type="checkbox" id="isGroupItem" class="mr-2">
                        <span class="text-sm">Group Item</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" id="isStageItem" class="mr-2">
                        <span class="text-sm">Stage Item</span>
                    </label>
                </div>
                <button onclick="addCompetition(${categoryId})" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Add Competition</button>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Competitions in ${category.data?.name} (${competitions.data?.length || 0})</h3>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${competitions.data?.map(comp => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${comp.name}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="space-x-1">
                                        <span class="px-2 py-1 text-xs rounded ${comp.is_group_item ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}">
                                            ${comp.is_group_item ? 'Group' : 'Individual'}
                                        </span>
                                        ${comp.is_stage_item ? '<span class="px-2 py-1 text-xs rounded bg-green-100 text-green-800">Stage</span>' : '<span class="px-2 py-1 text-xs rounded bg-orange-100 text-orange-800">Non-Stage</span>'}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 py-1 text-xs rounded ${getStatusColor(comp.status)}">
                                        ${comp.status}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${comp.scheduled_at ? new Date(comp.scheduled_at).toLocaleDateString() : 'Not scheduled'}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onclick="deleteCompetition(${comp.id}, ${categoryId})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        `).join('') || '<tr><td colspan="5" class="text-center py-8 text-gray-500">No competitions found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getStatusColor(status) {
    switch (status) {
        case 'pending': return 'bg-yellow-100 text-yellow-800';
        case 'ongoing': return 'bg-blue-100 text-blue-800';
        case 'completed': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

async function addCompetition(categoryId) {
    const name = document.getElementById('competitionName').value.trim();
    const isGroupItem = document.getElementById('isGroupItem').checked;
    const isStageItem = document.getElementById('isStageItem').checked;
    
    if (!name) {
        showNotification('Please enter competition name', 'error');
        return;
    }
    
    const { data, error } = await supabase
        .from('competitions')
        .insert({ 
            name, 
            category_id: parseInt(categoryId),
            is_group_item: isGroupItem,
            is_stage_item: isStageItem
        });
    
    if (error) {
        showNotification('Failed to create competition', 'error');
        return;
    }
    
    showNotification('Competition created successfully');
    document.getElementById('competitionName').value = '';
    document.getElementById('isGroupItem').checked = false;
    document.getElementById('isStageItem').checked = false;
    loadCategoryCompetitions();
}

async function deleteCompetition(competitionId, categoryId) {
    if (!confirm('Are you sure you want to delete this competition?')) {
        return;
    }
    
    const { error } = await supabase
        .from('competitions')
        .delete()
        .eq('id', competitionId);
    
    if (error) {
        showNotification('Failed to delete competition', 'error');
        return;
    }
    
    showNotification('Competition deleted successfully');
    loadCategoryCompetitions();
}

async function showInvigilatorsManagement() {
    setActiveNav('nav-invigilators');
    const content = document.getElementById('adminMainContent');
    const { data: invigilators, error } = await supabase.from('invigilators').select('*').order('created_at', { ascending: false });
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Invigilators Management</h1>
            <p class="text-gray-600">Create and manage invigilators</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Create Invigilator</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" id="invigilatorName" placeholder="Name" class="p-3 border rounded-lg">
                <input type="password" id="invigilatorPassword" placeholder="Password" class="p-3 border rounded-lg">
                <button onclick="createInvigilator()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Create Invigilator</button>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Invigilators (${invigilators?.length || 0})</h3>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${invigilators?.map(invigilator => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${invigilator.name}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${new Date(invigilator.created_at).toLocaleDateString()}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onclick="deleteInvigilator(${invigilator.id})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        `).join('') || '<tr><td colspan="3" class="text-center py-8 text-gray-500">No invigilators found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

async function createInvigilator() {
    const name = document.getElementById('invigilatorName').value.trim();
    const password = document.getElementById('invigilatorPassword').value.trim();
    
    if (!name || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    const { data, error } = await supabase
        .from('invigilators')
        .insert({ name, password });
    
    if (error) {
        showNotification('Failed to create invigilator', 'error');
        return;
    }
    
    showNotification('Invigilator created successfully');
    document.getElementById('invigilatorName').value = '';
    document.getElementById('invigilatorPassword').value = '';
    showInvigilatorsManagement();
}

async function deleteInvigilator(invigilatorId) {
    if (!confirm('Are you sure you want to delete this invigilator?')) {
        return;
    }
    
    const { error } = await supabase
        .from('invigilators')
        .delete()
        .eq('id', invigilatorId);
    
    if (error) {
        showNotification('Failed to delete invigilator', 'error');
        return;
    }
    
    showNotification('Invigilator deleted successfully');
    showInvigilatorsManagement();
}

async function showJudgesManagement() {
    setActiveNav('nav-judges');
    const content = document.getElementById('adminMainContent');
    
    const [judges, competitions, assignments] = await Promise.all([
        supabase.from('judges').select('*').order('created_at', { ascending: false }),
        supabase.from('competitions').select('*'),
        supabase.from('competition_judges').select('*, competitions(name), judges(name)')
    ]);
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Judges Management</h1>
            <p class="text-gray-600">Create and manage judges</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Create Judge</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" id="judgeName" placeholder="Name" class="p-3 border rounded-lg">
                <input type="password" id="judgePassword" placeholder="Password" class="p-3 border rounded-lg">
                <button onclick="createJudge()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Create Judge</button>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Assign Judge to Competition</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select id="assignJudge" class="p-3 border rounded-lg">
                    <option value="">Select Judge</option>
                    ${judges.data?.map(judge => `<option value="${judge.id}">${judge.name}</option>`).join('') || ''}
                </select>
                <select id="assignCompetition" class="p-3 border rounded-lg">
                    <option value="">Select Competition</option>
                    ${competitions.data?.map(comp => `<option value="${comp.id}">${comp.name}</option>`).join('') || ''}
                </select>
                <button onclick="assignJudgeToCompetition()" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Assign</button>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow-sm">
                <div class="p-6 border-b">
                    <h3 class="text-lg font-semibold">Judges (${judges.data?.length || 0})</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${judges.data?.map(judge => `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${judge.name}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button onclick="deleteJudge(${judge.id})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                                    </td>
                                </tr>
                            `).join('') || '<tr><td colspan="2" class="text-center py-8 text-gray-500">No judges found</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm">
                <div class="p-6 border-b">
                    <h3 class="text-lg font-semibold">Judge Assignments (${assignments.data?.length || 0})</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judge</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competition</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${assignments.data?.map(assignment => `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${assignment.judges?.name}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${assignment.competitions?.name}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button onclick="removeJudgeAssignment(${assignment.id})" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
                                    </td>
                                </tr>
                            `).join('') || '<tr><td colspan="3" class="text-center py-8 text-gray-500">No assignments found</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

async function createJudge() {
    const name = document.getElementById('judgeName').value.trim();
    const password = document.getElementById('judgePassword').value.trim();
    
    if (!name || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    const { data, error } = await supabase
        .from('judges')
        .insert({ name, password });
    
    if (error) {
        showNotification('Failed to create judge', 'error');
        return;
    }
    
    showNotification('Judge created successfully');
    document.getElementById('judgeName').value = '';
    document.getElementById('judgePassword').value = '';
    showJudgesManagement();
}

async function assignJudgeToCompetition() {
    const judgeId = document.getElementById('assignJudge').value;
    const competitionId = document.getElementById('assignCompetition').value;
    
    if (!judgeId || !competitionId) {
        showNotification('Please select both judge and competition', 'error');
        return;
    }
    
    const { data, error } = await supabase
        .from('competition_judges')
        .insert({ judge_id: parseInt(judgeId), competition_id: parseInt(competitionId) });
    
    if (error) {
        showNotification('Failed to assign judge', 'error');
        return;
    }
    
    showNotification('Judge assigned successfully');
    document.getElementById('assignJudge').value = '';
    document.getElementById('assignCompetition').value = '';
    showJudgesManagement();
}

async function deleteJudge(judgeId) {
    if (!confirm('Are you sure you want to delete this judge?')) {
        return;
    }
    
    const { error } = await supabase
        .from('judges')
        .delete()
        .eq('id', judgeId);
    
    if (error) {
        showNotification('Failed to delete judge', 'error');
        return;
    }
    
    showNotification('Judge deleted successfully');
    showJudgesManagement();
}

async function removeJudgeAssignment(assignmentId) {
    const { error } = await supabase
        .from('competition_judges')
        .delete()
        .eq('id', assignmentId);
    
    if (error) {
        showNotification('Failed to remove assignment', 'error');
        return;
    }
    
    showNotification('Assignment removed successfully');
    showJudgesManagement();
}

async function showResults() {
    setActiveNav('nav-results');
    const content = document.getElementById('adminMainContent');
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Results - Password Protected</h1>
            <p class="text-gray-600">View competition results and rankings</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="mb-6">
                <div class="max-w-md">
                    <input type="password" id="resultsPassword" placeholder="Enter password" class="p-3 border rounded-lg w-full mb-4">
                    <button onclick="verifyResultsPassword()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full">
                        View Results
                    </button>
                </div>
            </div>
            <div id="resultsContent" class="hidden">
                <!-- Results content will be loaded here after password verification -->
            </div>
        </div>
    `;
}

async function verifyResultsPassword() {
    const password = document.getElementById('resultsPassword').value;
    const currentUser = getCurrentUser();
    
    if (password === 'admin123' || password === currentUser.password) {
        document.getElementById('resultsContent').classList.remove('hidden');
        await loadResultsContent();
        showNotification('Password verified');
    } else {
        showNotification('Invalid password', 'error');
    }
}

async function loadResultsContent() {
    const resultsContent = document.getElementById('resultsContent');
    
    const [teams, categories] = await Promise.all([
        supabase.from('teams').select('*').order('total_points', { ascending: false }),
        supabase.from('categories').select('*')
    ]);
    
    // Get stage and non-stage categories
    const stageResults = await supabase
        .from('results')
        .select(`
            *, 
            participants(*, teams(name)), 
            competitions(*, categories(*))
        `)
        .eq('status', 'published');
    
    const stagePoints = {};
    const nonStagePoints = {};
    
    stageResults.data?.forEach(result => {
        if (result.competitions?.is_stage_item && !result.competitions?.categories?.is_general) {
            const teamName = result.participants?.teams?.name;
            if (teamName) {
                stagePoints[teamName] = (stagePoints[teamName] || 0) + (result.team_points || 0);
            }
        } else if (!result.competitions?.is_stage_item && !result.competitions?.categories?.is_general) {
            const teamName = result.participants?.teams?.name;
            if (teamName) {
                nonStagePoints[teamName] = (nonStagePoints[teamName] || 0) + (result.team_points || 0);
            }
        }
    });
    
    const kalaprathipa = Object.entries(stagePoints).sort(([,a], [,b]) => b - a)[0];
    const sargaprathipa = Object.entries(nonStagePoints).sort(([,a], [,b]) => b - a)[0];
    
    resultsContent.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Overall Champion</h3>
                <p class="text-2xl font-bold">${teams.data?.[0]?.name || 'N/A'}</p>
                <p class="text-sm opacity-90">${teams.data?.[0]?.total_points || 0} points</p>
            </div>
            
            <div class="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Kalaprathipa (Stage Items)</h3>
                <p class="text-2xl font-bold">${kalaprathipa?.[0] || 'N/A'}</p>
                <p class="text-sm opacity-90">${kalaprathipa?.[1] || 0} points</p>
            </div>
            
            <div class="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Sargaprathipa (Non-Stage Items)</h3>
                <p class="text-2xl font-bold">${sargaprathipa?.[0] || 'N/A'}</p>
                <p class="text-sm opacity-90">${sargaprathipa?.[1] || 0} points</p>
            </div>
        </div>
        
        <div class="bg-white border rounded-lg">
            <div class="p-4 border-b">
                <h3 class="text-lg font-semibold">Team Standings</h3>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Points</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage Points</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Non-Stage Points</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${teams.data?.map((team, index) => `
                            <tr class="${index < 3 ? 'bg-yellow-50' : ''}">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="text-sm font-medium text-gray-900">
                                        ${index + 1}
                                        ${index === 0 ? '🏆' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-medium text-gray-900">${team.name}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900 font-semibold">${team.total_points}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">${stagePoints[team.name] || 0}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">${nonStagePoints[team.name] || 0}</div>
                                </td>
                            </tr>
                        `).join('') || '<tr><td colspan="5" class="text-center py-8 text-gray-500">No teams found</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

async function showSchedule() {
    setActiveNav('nav-schedule');
    const content = document.getElementById('adminMainContent');
    
    const [competitions, invigilators, schedules] = await Promise.all([
        supabase.from('competitions').select('*, categories(name)'),
        supabase.from('invigilators').select('*'),
        supabase.from('competitions').select('*, competition_invigilators(*, invigilators(name))').order('scheduled_at', { ascending: true })
    ]);
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Competition Schedule</h1>
            <p class="text-gray-600">Manage competition scheduling</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 class="text-lg font-semibold mb-4">Schedule Competition</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <select id="scheduleCompetition" class="p-3 border rounded-lg">
                    <option value="">Select Competition</option>
                    ${competitions.data?.map(comp => `<option value="${comp.id}">${comp.name} (${comp.categories?.name})</option>`).join('') || ''}
                </select>
                <input type="datetime-local" id="scheduleDateTime" class="p-3 border rounded-lg">
                <input type="text" id="stageNumber" placeholder="Stage Number" class="p-3 border rounded-lg">
                <select id="scheduleInvigilator" class="p-3 border rounded-lg">
                    <option value="">Select Invigilator</option>
                    ${invigilators.data?.map(inv => `<option value="${inv.id}">${inv.name}</option>`).join('') || ''}
                </select>
                <button onclick="scheduleCompetition()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Schedule</button>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6 border-b">
                <h3 class="text-lg font-semibold">Scheduled Competitions</h3>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competition</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invigilator</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${schedules.data?.map(comp => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${comp.name}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${comp.categories?.name || 'N/A'}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${comp.scheduled_at ? new Date(comp.scheduled_at).toLocaleString() : 'Not scheduled'}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${comp.stage_number || 'N/A'}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${comp.competition_invigilators?.[0]?.invigilators?.name || 'Not assigned'}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 py-1 text-xs rounded ${getStatusColor(comp.status)}">
                                        ${comp.status}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                    <button onclick="updateCompetitionStatus('${comp.id}', 'ongoing')" class="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">Start</button>
                                    <button onclick="updateCompetitionStatus('${comp.id}', 'completed')" class="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600">Complete</button>
                                </td>
                            </tr>
                        `).join('') || '<tr><td colspan="7" class="text-center py-8 text-gray-500">No competitions scheduled</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

async function scheduleCompetition() {
    const competitionId = document.getElementById('scheduleCompetition').value;
    const dateTime = document.getElementById('scheduleDateTime').value;
    const stageNumber = document.getElementById('stageNumber').value.trim();
    const invigilatorId = document.getElementById('scheduleInvigilator').value;
    
    if (!competitionId || !dateTime) {
        showNotification('Please select competition and date/time', 'error');
        return;
    }
    
    // Update competition schedule
    const { error: compError } = await supabase
        .from('competitions')
        .update({ 
            scheduled_at: dateTime,
            stage_number: stageNumber || null
        })
        .eq('id', competitionId);
    
    if (compError) {
        showNotification('Failed to schedule competition', 'error');
        return;
    }
    
    // Assign invigilator if selected
    if (invigilatorId) {
        const { error: invError } = await supabase
            .from('competition_invigilators')
            .insert({ competition_id: parseInt(competitionId), invigilator_id: parseInt(invigilatorId) });
    }
    
    showNotification('Competition scheduled successfully');
    document.getElementById('scheduleCompetition').value = '';
    document.getElementById('scheduleDateTime').value = '';
    document.getElementById('stageNumber').value = '';
    document.getElementById('scheduleInvigilator').value = '';
    showSchedule();
}

async function updateCompetitionStatus(competitionId, status) {
    const { error } = await supabase
        .from('competitions')
        .update({ status })
        .eq('id', competitionId);
    
    if (error) {
        showNotification('Failed to update competition status', 'error');
        return;
    }
    
    showNotification(`Competition ${status} successfully`);
    showSchedule();
}

async function showSettings() {
    setActiveNav('nav-settings');
    const content = document.getElementById('adminMainContent');
    
    const settings = await supabase.from('settings').select('*');
    const maxStage = settings.data?.find(s => s.key === 'max_stage_registrations')?.value || '3';
    const maxNonStage = settings.data?.find(s => s.key === 'max_non_stage_registrations')?.value || '5';
    
    content.innerHTML = `
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
            <p class="text-gray-600">Application configuration and settings</p>
        </div>

        <div class="space-y-6">
            <div class="bg-white rounded-lg shadow-sm p-6">
                <h3 class="text-lg font-semibold mb-4">Participant Registration Limits</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Max Stage Item Registrations:</label>
                        <input type="number" id="maxStageReg" value="${maxStage}" min="1" class="p-3 border rounded-lg w-full">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Max Non-Stage Item Registrations:</label>
                        <input type="number" id="maxNonStageReg" value="${maxNonStage}" min="1" class="p-3 border rounded-lg w-full">
                    </div>
                    <div class="flex items-end">
                        <button onclick="updateRegistrationLimits()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full">Update Limits</button>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6">
                <h3 class="text-lg font-semibold mb-4">Team Leader Access Control</h3>
                <div class="space-x-4">
                    <button onclick="enableAllTeamAccess()" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                        Enable All Teams
                    </button>
                    <button onclick="disableAllTeamAccess()" class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                        Disable All Teams
                    </button>
                </div>
                <p class="text-sm text-gray-600 mt-2">Control access to setup for team leaders</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm p-6">
                <h3 class="text-lg font-semibold mb-4">System Information</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div class="flex justify-between">
                        <span class="text-gray-600">Version:</span>
                        <span>2.0.0</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Database:</span>
                        <span class="text-green-600">Connected</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Last Updated:</span>
                        <span>${new Date().toLocaleDateString()}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Status:</span>
                        <span class="text-green-600">Active</span>
                    </div>
                </div>
            </div>
            
            <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-red-800 mb-4">Danger Zone</h3>
                <div class="space-x-4">
                    <button onclick="resetAllResults()" class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                        Reset All Results
                    </button>
                    <button onclick="clearAllData()" class="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900">
                        Clear All Data
                    </button>
                </div>
                <p class="text-sm text-red-600 mt-2">These actions cannot be undone. Use with extreme caution.</p>
            </div>
        </div>
    `;
}

async function updateRegistrationLimits() {
    const maxStage = document.getElementById('maxStageReg').value;
    const maxNonStage = document.getElementById('maxNonStageReg').value;
    
    const updates = [
        { key: 'max_stage_registrations', value: maxStage },
        { key: 'max_non_stage_registrations', value: maxNonStage }
    ];
    
    for (const update of updates) {
        await supabase
            .from('settings')
            .upsert(update, { onConflict: 'key' });
    }
    
    showNotification('Registration limits updated successfully');
}

async function enableAllTeamAccess() {
    if (!confirm('Enable access for all teams?')) return;
    
    const { error } = await supabase
        .from('teams')
        .update({ leader_access: true })
        .neq('id', 0);
    
    if (error) {
        showNotification('Failed to enable team access', 'error');
        return;
    }
    
    showNotification('All teams now have leader access');
}

async function disableAllTeamAccess() {
    if (!confirm('Disable access for all teams?')) return;
    
    const { error } = await supabase
        .from('teams')
        .update({ leader_access: false })
        .neq('id', 0);
    
    if (error) {
        showNotification('Failed to disable team access', 'error');
        return;
    }
    
    showNotification('All teams access disabled');
}

async function resetAllResults() {
    if (!confirm('This will delete all results and reset team points. Continue?')) return;
    
    const { error } = await supabase
        .from('results')
        .delete()
        .neq('id', 0);
    
    if (!error) {
        await supabase
            .from('teams')
            .update({ total_points: 0 })
            .neq('id', 0);
        
        showNotification('All results reset successfully');
    } else {
        showNotification('Failed to reset results', 'error');
    }
}

async function clearAllData() {
    const confirmation = prompt('Type "DELETE ALL DATA" to confirm this action:');
    if (confirmation !== 'DELETE ALL DATA') {
        showNotification('Action cancelled', 'error');
        return;
    }
    
    // This would delete all data - implement with extreme caution
    showNotification('This feature is disabled for safety', 'error');
}
