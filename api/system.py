import psutil

def cpu_usage():
    #returns how much cpu is currently used in %
    return psutil.cpu_percent()

def memory_usage():
    # returns how much memory is currnelty used in %
    return psutil.virtual_memory()[2]