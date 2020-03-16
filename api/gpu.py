from random import random
from operator import itemgetter

import GPUtil as GPU


def dummy_gpus(num):
   gpus = []
   for i in range(num):
      # data for current fake gpu
      gpu_name = "Nvidia {}".format(i)
      gpu_load = float("{0:.1f}".format(random()*100))
      gpus.append({'name': gpu_name, 'load':gpu_load})
   
   return gpus
    

def get_usage():
   gpus = []

   try:
      GPUs = GPU.getGPUs()
      # GPUs = dummy_gpus(5)
      if len(GPUs) > 0:
         for gpu in GPUs:
            gpu_name=gpu['name']
            gpu_load = float("{0:.1f}".format(gpu['load']*100))
            gpus.append({'name':gpu_name, 'load': gpu_load})
      else:
         # the current system does not have any Nvidia GPUs
         # simulate 5 fake gpus
         gpus = dummy_gpus(5)
   except:
      return []

   return sorted(gpus, key=itemgetter('load'), reverse=True)
